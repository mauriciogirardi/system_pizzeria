import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import * as S from './styles';

const MainPage = () => {
  return (
    <S.Container>
      <Header />
      <h1>MainPage</h1>
    </S.Container>
  );
};

export default MainPage;
