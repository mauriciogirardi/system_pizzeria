import { FiClock } from 'react-icons/fi';

import deliveryImg from 'assets/delivery.png';
import { useAuth } from 'hooks/useAuth';
import { useOrder } from 'hooks/useOrder';
import { HOME } from 'router/routes';
import * as S from './styles';

const CheckoutFinish = () => {
  const { user } = useAuth();
  const { sendOrder } = useOrder();

  return (
    <S.Container>
      <S.MainContainer>
        <S.Title>Pronto {user.name}!</S.Title>

        <S.Content>
          <p>Seu pedido será entregue no endereço escolhido em</p>
          <span>
            <FiClock />
            45 a 60 minutos!
          </span>

          <img src={deliveryImg} alt="Entrega" />
        </S.Content>
      </S.MainContainer>

      <S.Footer>
        <S.FooterLink onClick={sendOrder} to={HOME}>
          Voltar para página inicial
        </S.FooterLink>
      </S.Footer>
    </S.Container>
  );
};

export default CheckoutFinish;
