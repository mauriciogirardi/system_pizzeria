import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { AuthProvider } from 'hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
