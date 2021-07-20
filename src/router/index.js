import { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import Loading from 'components/Loading';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

const Router = ({ location }) => {
  const { isLoggedIn } = useAuth();
  const [didCheckUserIn, setDidCheckUser] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setDidCheckUser(true);
    }
  }, [isLoggedIn]);

  if (!didCheckUserIn) {
    return <Loading />;
  }

  if (isLoggedIn && location.pathname === '/login') {
    return <Redirect to="/" />;
  }
  if (!isLoggedIn && location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }

  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Suspense>
  );
};

export default Router;
