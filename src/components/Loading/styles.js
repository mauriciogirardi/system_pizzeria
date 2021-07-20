import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%,100% {
    stroke-dashoffset: 260;
  }
  50%{
    stroke-dashoffset: 0;
  }
  50.1%{
    stroke-dashoffset: 520;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg) ;
  }
  100%{
    transform: rotate(360deg) ;

  }

`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6rem;
  transform: translate(-50%, -50%);

  > svg {
    position: relative;
    width: 5.7rem;
    height: 5.7rem;
    animation: ${rotate} 2s linear infinite;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 5;
      stroke: #e04343;
      stroke-linecap: round;
      transform: translate(0.4rem, 0.4rem);
      stroke-dasharray: 260;
      stroke-dashoffset: 260;
      animation: ${animate} 4s linear infinite;
    }
  }
`;
