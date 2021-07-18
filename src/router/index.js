import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default Router;
