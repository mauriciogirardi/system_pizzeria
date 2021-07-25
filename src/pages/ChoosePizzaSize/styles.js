import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100%{
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${animate} 0.8s;
`;
