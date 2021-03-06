import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import formattedCurrency from 'utils/formattedCurrency';
import CardPizzaFlavours from 'components/CardPizzaFlavours';
import Footer from 'components/Footer';
import Carousel from 'components/Carosel';
import { Title, Center } from 'Ui';
import {
  CHOOSE_PIZZA_FLAVOURS,
  HOME,
  CHOOSE_PIZZA_QUANTITY,
} from 'router/routes';
import { pizzasFlavours } from 'fakes/pizzasFlavours';
import * as S from './styles';
const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckBoxes] = useState({});

  if (!location.state) return <Redirect to={HOME} />;
  const { flavours, id } = location.state.pizzaSize;

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

  const getFlavoursNameAndId = checkboxes => {
    return Object.entries(checkboxes)
      .filter(([, value]) => !!value)
      .map(([id]) => ({
        id,
        name: pizzasFlavours.find(flavours => flavours.id === id).name,
      }));
  };

  return (
    <S.Container>
      <Center>
        <Title>{`Escolha até ${flavours} sabores`}</Title>
        <Carousel>
          {pizzasFlavours.map(pizza => {
            return (
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
                  value={formattedCurrency(pizza.value[id])}
                  image={pizza.image}
                />
              </label>
            );
          })}
        </Carousel>
      </Center>

      <Footer
        nameBack="Mudar tamanho"
        nameNext="Quantidade"
        disabled={checkboxesChecked(checkboxes).length === 0}
        buttons={{
          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId(checkboxes),
              },
            },
          },
        }}
      />
    </S.Container>
  );
};

export default ChoosePizzaFlavours;
