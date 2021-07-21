import { useRef, useEffect } from 'react';

import { useAuth } from 'hooks/useAuth';
import Header from 'components/Header';
import CardSizePizza from 'components/CardSizePizza';
import * as S from './styles';

const MainPage = () => {
  const activeSlideRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    if (activeSlideRef.current) {
      document.querySelector('#wrapper').addEventListener('wheel', event => {
        if (event.deltaY > 0) {
          event.target.scrollBy(300, 0);
        } else {
          event.target.scrollBy(-300, 0);
        }
      });
    }
  }, [activeSlideRef]);

  return (
    <>
      <Header />

      <S.Container>
        <S.Title>{`O que vai ser hoje, ${user?.name}`}</S.Title>

        <h2>Escolha o tamanho da pizza</h2>

        <S.Content ref={activeSlideRef} id="wrapper">
          <CardSizePizza
            isActive={true}
            size={25}
            title="Pequena"
            slice={6}
            flavorQtd={1}
          />
          <CardSizePizza size={35} title="Média" slice={8} flavorQtd={2} />
          <CardSizePizza size={45} title="Grande" slice={16} flavorQtd={3} />
        </S.Content>
      </S.Container>
    </>
  );
};

export default MainPage;
