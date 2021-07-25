import { Link } from 'react-router-dom';
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
  animation: ${animate} 0.7s;

  @media (max-width: 500px) {
    height: calc(100vh - 4rem);
  }
`;

export const Content = styled.div`
  margin-top: 3rem;
  width: 15rem;
  text-align: center;

  input {
    background: #312e38;
    color: #fff;
    font-weight: 500;
    height: 4.4rem;
    width: 8rem;
    border-radius: 0.5rem;
    border: 0;
    font-size: 3.5rem;
    margin-bottom: 3rem;
    outline: 0;
    padding-left: 2rem;
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #f90;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  :hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;
