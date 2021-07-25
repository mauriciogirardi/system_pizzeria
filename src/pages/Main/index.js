import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'components/Loading';
import Header from 'components/Header';
import {
  HOME,
  CHOOSE_PIZZA_FLAVOURS,
  CHOOSE_PIZZA_QUANTITY,
  CHECKOUT,
  CHECKOUT_CONFIRMATION,
  CHECKOUT_FINISH,
} from 'router/routes';
import * as S from './styles';

const ChoosePizzaSize = lazy(() => import('pages/ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('pages/ChoosePizzaFlavours'));
const ChoosePizzaQuantity = lazy(() => import('pages/ChoosePizzaQuantity'));
const Checkout = lazy(() => import('pages/Checkout'));
const CheckoutConfirmation = lazy(() => import('pages/CheckoutConfirmation'));
const CheckoutFinish = lazy(() => import('pages/CheckotFinish'));

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
            <Route path={CHECKOUT} exact component={Checkout} />
            <Route path={CHECKOUT_FINISH} exact component={CheckoutFinish} />
            <Route
              path={CHECKOUT_CONFIRMATION}
              exact
              component={CheckoutConfirmation}
            />
          </Switch>
        </Suspense>
      </S.Container>
    </>
  );
};

export default Main;
