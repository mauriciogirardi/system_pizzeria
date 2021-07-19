import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

const Router = () => {
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
