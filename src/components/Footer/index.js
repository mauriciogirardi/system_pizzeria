import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { useAuth } from 'hooks/useAuth';
import Button from 'components/Button';
import * as S from './styles';

const Footer = ({
  name = '',
  slices = '',
  flavours = '',
  isDisabledButtonQtd,
  handleBack,
  handleNext,
  nameBack = '',
  nameNext = '',
}) => {
  const { user } = useAuth();
  const description = `Pizza ${name.toUpperCase()} - (${slices} fatias, ${flavours}
    ${flavours === 1 ? 'sabor' : 'sabores'})`;

  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterInfo>
          <h3>{`${user.name}, seu pedido é:`}</h3>
          <p>{description}</p>
        </S.FooterInfo>

        <S.FooterWrapper>
          <Button
            background="#e04343"
            icon={FiArrowLeft}
            iconRight
            onClick={handleBack}
          >
            {nameBack}
          </Button>
          <Button
            disabled={isDisabledButtonQtd}
            background="#e04343"
            icon={FiArrowRight}
            iconLeft
            onClick={handleNext}
          >
            {nameNext}
          </Button>
        </S.FooterWrapper>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
