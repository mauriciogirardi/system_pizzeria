import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'components/Loading';
import Header from 'components/Header';
import {
  HOME,
  CHOOSE_PIZZA_FLAVOURS,
  CHOOSE_PIZZA_QUANTITY,
} from 'router/routes';
import * as S from './styles';

const ChoosePizzaSize = lazy(() => import('pages/ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('pages/ChoosePizzaFlavours'));
const ChoosePizzaQuantity = lazy(() => import('pages/ChoosePizzaQuantity'));

const Main = () => {
  return (
    <>
      <Header />

      <S.Container>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              path={CHOOSE_PIZZA_FLAVOURS}
              component={ChoosePizzaFlavours}
            />
            <Route
              path={CHOOSE_PIZZA_QUANTITY}
              component={ChoosePizzaQuantity}
            />
            <Route path={HOME} exact component={ChoosePizzaSize} />
          </Switch>
        </Suspense>
      </S.Container>
    </>
  );
};

export default Main;
