import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import CardSizePizza from 'components/CardSizePizza';
import { dataChoosePizzaSize } from 'fakes/choosePizzaSize';
import { CHOOSE_PIZZA_FLAVOURS } from 'router/routes';
import * as S from './styles';

const ChoosePizzaSize = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Title>{`O que vai ser hoje, ${user?.name}`}</S.Title>

      <h2>Escolha o tamanho da pizza</h2>

      <S.Content>
        {dataChoosePizzaSize.map(pizza => (
          <Link
            key={pizza.id}
            to={{
              pathname: CHOOSE_PIZZA_FLAVOURS,
              state: pizza,
            }}
          >
            <CardSizePizza
              // isActive={}
              size={pizza.size}
              title={pizza.name}
              slice={pizza.slices}
              flavorQtd={pizza.flavours}
            />
          </Link>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default ChoosePizzaSize;
