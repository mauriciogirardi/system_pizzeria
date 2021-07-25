import isPluralOrSingular from 'utils/isPluralOrSingular';
import { useOrder } from 'hooks/useOrder';
import { useAuth } from 'hooks/useAuth';
import * as S from './styles';
import { CHECKOUT_FINISH } from 'router/routes';

const CheckoutConfirmation = () => {
  const { order } = useOrder();
  const { user } = useAuth();

  const descriptionTheOrder = () => {
    return order.pizzas.map((pizza, index) => {
      const { pizzaFlavours, pizzaSize, quantity } = pizza;
      const { name, slices, flavours } = pizzaSize;
      const slicesPizzaSize = isPluralOrSingular(slices, 'fatias', 'fatia');
      const flavoursPizzaSize = isPluralOrSingular(
        flavours,
        'sabores',
        'sabor',
      );
      const flavoursPizza = isPluralOrSingular(
        flavours,
        'nos sabores',
        'no sabor',
      );

      return (
        <S.Order key={index}>
          <h4>{`${quantity} pizza ${name.toLowerCase()} - ${slices} ${slicesPizzaSize}, ${flavours} ${flavoursPizzaSize}`}</h4>
          <h4>{`${flavoursPizza}: ${pizzaFlavours
            .map(({ name }) => name)
            .join(', ')}`}</h4>
        </S.Order>
      );
    });
  };

  return (
    <S.Container>
      <S.MainContainer>
        <S.Title>
          <h1>Oi {user.name}!</h1>
          <h2>
            Confere, por favor, se está tudo certo com o seu pedido antes de
            finaliza?
          </h2>
        </S.Title>

        <S.Content>
          <p>Seu pedido:</p>
          {descriptionTheOrder()}
          <p>Endereço de entrega:</p>
          <h4>Rocio Grande</h4>
          <h4>Rua presbiteiro joão leite 741</h4>
          <h4>Casa com grade branca</h4>

          <p>Telefone para contato:</p>
          <h4>(47)99608-9390</h4>
        </S.Content>
      </S.MainContainer>

      <S.Footer>
        <S.FooterLink to={CHECKOUT_FINISH}>Efetuar pedido</S.FooterLink>
      </S.Footer>
    </S.Container>
  );
};

export default CheckoutConfirmation;
