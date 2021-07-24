import styled, { css } from 'styled-components';

export const Container = styled.button`
  margin-top: ${props => props.top};
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: ${props => props.background};
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${props =>
    props.iconLeft &&
    css`
      svg {
        margin-left: 1rem;
      }
    `};

  ${props =>
    props.iconRight &&
    css`
      svg {
        margin-right: 1rem;
      }
    `};

  svg {
    font-size: 1.3rem;
  }

  :hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;
