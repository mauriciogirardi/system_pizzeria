import pizzaSizeImg from 'assets/pizza_size.svg';

import * as S from './styles';

const CardSizePizza = ({ size, title, slice, flavorQtd, isActive = false }) => {
  return (
    <S.Card isActive={isActive}>
      <S.ImageCard>
        <img src={pizzaSizeImg} alt="Tamanho da pizza" />
        <span>{`${size} cm`}</span>
      </S.ImageCard>
      <S.Line />
      <S.ContentCard>
        <h2>{title}</h2>
        <p>{`${slice} fatias, ${flavorQtd} ${
          flavorQtd === 1 ? 'sabor' : 'sabores'
        }`}</p>
      </S.ContentCard>
    </S.Card>
  );
};

export default CardSizePizza;
