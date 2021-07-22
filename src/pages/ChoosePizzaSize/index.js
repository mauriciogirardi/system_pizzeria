import { Link } from 'react-router-dom';

import CardSizePizza from 'components/CardSizePizza';
import Carousel from 'components/Carosel';
import { Center, Title, SubTitle } from 'Ui';
import { useAuth } from 'hooks/useAuth';
import { dataChoosePizzaSize } from 'fakes/choosePizzaSize';
import { CHOOSE_PIZZA_FLAVOURS } from 'router/routes';
import * as S from './styles';

const ChoosePizzaSize = () => {
  const { user } = useAuth();

  return (
    <Center>
      <Title>{`O que vai ser hoje, ${user?.name}`}</Title>
      <SubTitle>Escolha o tamanho da pizza</SubTitle>

      <Carousel>
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
      </Carousel>
    </Center>
  );
};

export default ChoosePizzaSize;
