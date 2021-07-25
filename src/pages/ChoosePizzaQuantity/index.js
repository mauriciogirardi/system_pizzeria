import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from 'components/Footer';
import { useOrder } from 'hooks/useOrder';
import { Title, Center } from 'Ui';
import { CHECKOUT, HOME } from 'router/routes';
import * as S from './styles';

const ChoosePizzaQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1);
  const { addPizzaToOrder } = useOrder();

  if (!location.state) return <Redirect to={HOME} />;

  const onChange = e => {
    const { value } = e.target;
    setQuantity(Number(value));
  };

  const addPizza = () => {
    addPizzaToOrder({
      ...location.state,
      quantity,
    });
  };

  return (
    <S.Container>
      <Center>
        <Title>
          Quantas pizzas você gostaria<br></br> de pedir, com esses sabores?
        </Title>

        <S.Content>
          <input type="number" value={quantity} min={1} onChange={onChange} />
          <S.ButtonLink to={HOME} onClick={addPizza}>
            Adicionar e montar outra
          </S.ButtonLink>
        </S.Content>
      </Center>

      <Footer
        nameBack="Mudar sabores"
        nameNext="Finalizar"
        buttons={{
          action: {
            onClick: addPizza,
            to: CHECKOUT,
          },
        }}
      />
    </S.Container>
  );
};

export default ChoosePizzaQuantity;
