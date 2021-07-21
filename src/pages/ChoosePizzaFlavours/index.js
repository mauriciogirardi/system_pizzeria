import { useAuth } from 'hooks/useAuth';
import CardSizePizza from 'components/CardSizePizza';
import { dataChoosePizzaSize } from 'fakes/choosePizzaSize';
import { CHOOSE_PIZZA_FLAVOURS } from 'router/routes';
import * as S from './styles';

const ChoosePizzaFlavours = ({ location }) => {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Title>Escolha o sabor da pizza</S.Title>

      <S.Content>
        {dataChoosePizzaSize.map(pizza => (
          <CardSizePizza
            to={CHOOSE_PIZZA_FLAVOURS}
            // isActive={}
            key={pizza.id}
            size={pizza.size}
            title={pizza.name}
            slice={pizza.slices}
            flavorQtd={pizza.flavours}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default ChoosePizzaFlavours;
