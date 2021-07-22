import { useState } from 'react';

import CardPizzaFlavours from 'components/CardPizzaFlavours';
import Carousel from 'components/Carosel';
import { Title, Center } from 'Ui';
import { useAuth } from 'hooks/useAuth';
import { CHOOSE_PIZZA_FLAVOURS, HOME } from 'router/routes';
import { pizzasFlavours } from 'fakes/pizzasFlavours';
import * as S from './styles';
import { Redirect } from 'react-router-dom';

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckBoxes] = useState({});
  const { user } = useAuth();

  if (!location.state) return <Redirect to={HOME} />;
  const { flavours, id } = location.state;

  const checkboxesChecked = checkboxes => {
    return Object.values(checkboxes).filter(Boolean);
  };

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

  return (
    <Center>
      <Title>{`Escolha até ${flavours} sabores`}</Title>
      <Carousel>
        {pizzasFlavours.map(pizza => (
          <label key={pizza.id}>
            <S.Checkbox
              type="checkbox"
              checked={!!checkboxes[pizza.id]}
              onChange={e => handleChangeCheckBox(e, pizza.id)}
            />

            <CardPizzaFlavours
              to={CHOOSE_PIZZA_FLAVOURS}
              isActive={!!checkboxes[pizza.id]}
              name={pizza.name}
              value={pizza.value[id]}
              image={pizza.image}
            />
          </label>
        ))}
      </Carousel>
    </Center>
  );
};

export default ChoosePizzaFlavours;
