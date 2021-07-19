import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import firebase from 'services/firebase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(() => {
    const user = JSON.parse(localStorage.getItem('@pizzaria_delivery'));

    if (user) return user;
    return {};
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const dataUser = {
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
        };

        localStorage.setItem('@pizzaria_delivery', JSON.stringify(dataUser));
        setData(dataUser);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem('@pizzaria_delivery');
        setIsLoggedIn(false);
      }
    });
  }, []);

  const loginGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(async () => {
    await firebase.auth().signOut();
    localStorage.removeItem('@pizzaria_delivery');
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loginGoogle, logout, isLoggedIn, user: data }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
