import { BrowserRouter, Route } from 'react-router-dom';
import Router from './router';
import Providers from 'hooks';

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Route component={Router} />
      </BrowserRouter>
    </Providers>
  );
};

export default App;
