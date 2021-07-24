import * as S from './styles';

const Button = ({
  icon: Icon,
  children,
  top,
  iconLeft,
  iconRight,
  background = '#f90',
  onClick,
  disabled,
}) => {
  return (
    <S.Container
      top={top}
      background={background}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      onClick={onClick}
    >
      {iconRight && Icon && <Icon />}
      {children}
      {iconLeft && Icon && <Icon />}
    </S.Container>
  );
};

export default Button;
