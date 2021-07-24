import { FiLogOut } from 'react-icons/fi';
import { useAuth } from 'hooks/useAuth';
import logoImg from 'assets/logo.svg';
import * as S from './styles';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <S.Container>
      <img src={logoImg} alt="Logo" />
      <S.Profile>
        <p>Olá, {user?.name}</p>
        {!user.avatar && <S.Image />}
        {user.avatar && <img src={user.avatar} alt={user.name} />}

        <S.Line />

        <button type="button" onClick={logout} title="Sair">
          <FiLogOut />
        </button>
      </S.Profile>
    </S.Container>
  );
};

export default Header;
