import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from 'components/Footer';
import Button from 'components/Button';
import { Title, Center } from 'Ui';
import {
  CHOOSE_PIZZA_FLAVOURS,
  HOME,
  CHOOSE_PIZZA_QUANTITY,
} from 'router/routes';
import * as S from './styles';

const ChoosePizzaQuantity = () => {
  const [checkboxes, setCheckBoxes] = useState({});
  const history = useHistory();

  const handleChangeCheckBox = (event, pizzaId) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      event.target.checked
    )
      return;

    setCheckBoxes(prevState => ({
      ...prevState,
      [pizzaId]: event.target.checked,
    }));
  };

  const handleBack = () => {
    history.push(CHOOSE_PIZZA_FLAVOURS);
  };

  const handleNext = () => {};

  return (
    <S.Container>
      <Center>
        <Title>
          Quantas pizzas você gostaria<br></br> de pedir, com esses sabores?
        </Title>
        <S.Content>
          <input type="number" defaultValue="1" />
          <Button>Adicionar e montar outra</Button>
        </S.Content>
      </Center>
      <Footer
        handleBack={handleBack}
        handleNext={handleNext}
        nameBack="Mudar sabor"
        nameNext="Finalizar"
      />
    </S.Container>
  );
};

export default ChoosePizzaQuantity;
