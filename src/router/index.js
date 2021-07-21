import { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import Loading from 'components/Loading';
import { HOME, LOGIN } from './routes';

const Main = lazy(() => import('pages/Main'));
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

  if (isLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />;
  }
  if (!isLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route path={HOME} component={Main} />
      </Switch>
    </Suspense>
  );
};

export default Router;
