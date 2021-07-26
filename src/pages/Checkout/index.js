import { useState } from 'react';
import { FiArrowRight, FiTrash } from 'react-icons/fi';

import isPluralOrSingular from 'utils/isPluralOrSingular';
import { useOrder } from 'hooks/useOrder';
import { useAuth } from 'hooks/useAuth';
import { CHECKOUT_CONFIRMATION } from 'router/routes';
import * as S from './styles';

const Checkout = () => {
  const { order, removePizzaFromOrder } = useOrder();
  const { user } = useAuth();
  const [address, setAddress] = useState(false);
  const [local, setLocal] = useState(false);
  const [values, setValues] = useState({
    city: 'São Francisco do Sul',
    description: '',
    name: user.fullName,
    neighbor: '',
    number: '',
    phone: '',
    street: '',
  });

  const onChangeCheckBox = (e, type) => {
    const { checked } = e.target;

    if (type === 'local') {
      setLocal(checked);
      setAddress(false);
    } else {
      setAddress(checked);
      setLocal(false);
    }
  };

  const descriptionTheOrder = () => {
    return order.pizzas.map(pizza => {
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
        <S.Order key={pizza.id}>
          <div>
            <p>{`${quantity} pizza ${name.toLowerCase()} - ${slices} ${slicesPizzaSize}, ${flavours} ${flavoursPizzaSize}`}</p>
            <span>{`${flavoursPizza}: ${pizzaFlavours
              .map(({ name }) => name)
              .join(', ')}`}</span>
          </div>

          <button onClick={() => removePizzaFromOrder(pizza.id)}>
            <FiTrash />
          </button>
        </S.Order>
      );
    });
  };

  const onChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const isDisabled = () => {
    if (local && values.name && values.phone) return false;

    if (
      address &&
      values.name &&
      values.phone &&
      values.neighbor &&
      values.number &&
      values.phone &&
      values.street
    )
      return false;

    return true;
  };

  const phoneMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})/, '($1)')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  return (
    <S.Container>
      <S.MainContainer>
        <S.MainCard>
          <S.ContainerMainInfo>
            <S.Title>
              <h2>Qual o endereço da entrega?</h2>
            </S.Title>
            <S.Card>
              <footer>
                <label>
                  <input
                    checked={local}
                    type="checkbox"
                    onChange={e => onChangeCheckBox(e, 'local')}
                  />
                  Retirar no balcão
                </label>
                <label>
                  <input
                    checked={address}
                    type="checkbox"
                    onChange={e => onChangeCheckBox(e, 'address')}
                  />
                  Adicionar endereço
                </label>
              </footer>

              {address && (
                <S.Address>
                  <input
                    value={values.city}
                    placeholder="*Cidade"
                    name="city"
                    onChange={onChange}
                  />
                  <input
                    value={values.neighbor}
                    placeholder="*Bairro"
                    name="neighbor"
                    onChange={onChange}
                  />
                  <input
                    value={values.street}
                    placeholder="*Rua"
                    name="street"
                    onChange={onChange}
                  />
                  <input
                    value={values.number}
                    placeholder="*Número"
                    name="number"
                    onChange={onChange}
                  />
                  <textarea
                    value={values.description}
                    placeholder="Observação"
                    name="description"
                    onChange={onChange}
                  />
                </S.Address>
              )}
            </S.Card>

            <S.Title>
              <h2>Qual o seu telefone e nome?</h2>
            </S.Title>
            <S.Card>
              <S.User>
                <input
                  value={values.name}
                  placeholder="*Nome"
                  name="name"
                  onChange={onChange}
                />
                <input
                  value={phoneMask(values.phone)}
                  placeholder="*Telefone"
                  type="tel"
                  name="phone"
                  onChange={onChange}
                />
              </S.User>
            </S.Card>
          </S.ContainerMainInfo>

          <S.ContainerMainOder>
            <S.Title>
              <h2>Informações do seu pedido</h2>
            </S.Title>
            <S.MainOder>{descriptionTheOrder()}</S.MainOder>
          </S.ContainerMainOder>
        </S.MainCard>
      </S.MainContainer>

      <S.Footer>
        <S.FooterLink disabled={isDisabled()} to={CHECKOUT_CONFIRMATION}>
          Finalizar pedido
          <FiArrowRight />
        </S.FooterLink>
      </S.Footer>
    </S.Container>
  );
};

export default Checkout;
