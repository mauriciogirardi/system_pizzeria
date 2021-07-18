import { useState, useRef } from 'react';
import * as S from './styles';

const Input = ({ icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  };

  return (
    <S.Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon />}
      <input
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
      />
    </S.Container>
  );
};

export default Input;
