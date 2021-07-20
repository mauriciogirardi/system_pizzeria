import { BrowserRouter, Route } from 'react-router-dom';
import Router from './router';
import { AuthProvider } from 'hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route component={Router} />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
