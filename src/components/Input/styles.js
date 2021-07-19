import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #232129;
  border: 2px solid #232129;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.5rem;

  & + div {
    margin-top: 0.8rem;
  }

  > svg {
    font-size: 1.5rem;
    color: #939393;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}

  input {
    padding: 0 0.8rem;
    width: 100%;
    background-color: transparent;
    border: 0;
    font-size: 1.1rem;
    outline: 0;
    color: #f1f1f1;
  }
`;
