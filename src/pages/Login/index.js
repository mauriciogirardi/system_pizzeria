import { FiMail, FiLock } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';

import ButtonGmail from 'components/ButtonGmail';
import Button from 'components/Button';
import Input from 'components/Input';

import * as S from './styles';

const Login = () => {
  return (
    <>
      <S.Container>
        <S.Background />
        <S.Content>
          <h1>Login</h1>

          <ButtonGmail />

          <S.Line>ou</S.Line>
          <S.Form>
            <Input icon={FiMail} type="text" placeholder="E-mail" />
            <Input icon={FiLock} type="password" placeholder="Senha" />
            <Button top="1rem" icon={FaSignOutAlt} iconLeft>
              Entrar
            </Button>
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Login;
