import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    opacity: 0;
  }
  100%{
   opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 4.9rem);
  animation: ${animate} 0.6s;

  @media (max-width: 500px) {
    height: calc(100vh - 4rem);
  }
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;
