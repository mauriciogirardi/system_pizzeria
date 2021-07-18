import { FiMail, FiLock } from "react-icons/fi";

import ButtonGmail from "../../components/ButtonGmail";
import Button from "../../components/Button";
import { FaSignOutAlt } from "react-icons/fa";
import Input from "../../components/Input";

import * as S from "./styles";

const Login = () => {
  return (
    <>
      <S.Background />
      <S.Container>
        <S.Content>
          <h1>Login</h1>

          <ButtonGmail />
          <S.Form>
            <Input icon={FiMail} type="text" placeholder="E-mail" />
            <Input icon={FiLock} type="password" placeholder="Senha" />
            <Button top="1rem" icon={FaSignOutAlt}>
              Entrar
            </Button>
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Login;
