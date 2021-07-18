import * as S from "./styles";

const Button = ({ icon: Icon, children, rest, top }) => {
  return (
    <S.Container top={top} {...rest}>
      {Icon && <Icon />}
      {children}
    </S.Container>
  );
};

export default Button;
