import { withRouter, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { useAuth } from 'hooks/useAuth';
import isPluralOrSingular from 'utils/isPluralOrSingular';
import * as S from './styles';

const Footer = ({
  buttons,
  disabled,
  location,
  nameBack = '',
  nameNext = '',
}) => {
  const { user } = useAuth();
  const history = useHistory();

  const { pizzaSize, pizzaFlavours } = location.state;
  const { flavours, name, slices } = pizzaSize;

  const description = `Pizza ${name.toUpperCase()} - (${slices} ${isPluralOrSingular(
    slices,
    'fatias',
    'fatia',
  )}, ${flavours}
      ${isPluralOrSingular(flavours, 'sabores', 'sabor')})`;

  const handleBlack = event => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterInfo>
          <h3>{`${user.name}, seu pedido é:`}</h3>
          <p>{description}</p>
          {pizzaFlavours && (
            <p>
              {`${isPluralOrSingular(
                pizzaFlavours.length,
                'Nos sabores',
                'No sabor',
              )}: ${pizzaFlavours.map(({ name }) => name).join(', ')}`}
            </p>
          )}
        </S.FooterInfo>

        <S.FooterWrapper>
          <S.ButtonBack {...buttons.back} onClick={e => handleBlack(e)}>
            <FiArrowLeft style={{ marginRight: '0.5rem' }} />
            {nameBack}
          </S.ButtonBack>
          <S.ButtonLink {...buttons.action} disabled={disabled}>
            {nameNext}
            <FiArrowRight style={{ marginLeft: '0.5rem' }} />
          </S.ButtonLink>
        </S.FooterWrapper>
      </S.FooterContent>
    </S.Footer>
  );
};

export default withRouter(Footer);
