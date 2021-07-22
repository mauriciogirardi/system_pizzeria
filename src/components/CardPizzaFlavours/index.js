import * as S from './styles';

const CardPizzaFlavours = ({ name, value, image, isActive = false }) => {
  return (
    <S.Card isActive={isActive}>
      <S.ImageCard>
        <img src={image} alt="Sabor da pizza" />
      </S.ImageCard>
      <S.Line />
      <S.ContentCard>
        <h2>{name}</h2>
        <p>{value}</p>
      </S.ContentCard>
    </S.Card>
  );
};

export default CardPizzaFlavours;
