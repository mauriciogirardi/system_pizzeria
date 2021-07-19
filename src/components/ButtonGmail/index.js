import { SiGmail } from 'react-icons/si';
import { useAuth } from 'hooks/useAuth';
import * as S from './styles';

const ButtonGmail = () => {
  const { loginGoogle } = useAuth();

  return (
    <>
      <S.Container type="button" onClick={loginGoogle}>
        <SiGmail />
        Entrar com gmail
      </S.Container>
    </>
  );
};

export default ButtonGmail;
