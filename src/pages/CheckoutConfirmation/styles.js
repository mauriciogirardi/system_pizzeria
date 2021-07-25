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
  animation: ${animate} 0.6s;

  @media (max-width: 500px) {
    height: calc(100vh - 4rem);
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 2rem;
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
  }

  h2 {
    font-weight: 500;
  }

  @media (max-width: 500px) {
    margin-top: 1.5rem;
  }
`;

export const Content = styled.div`
  width: 40rem;
  background: #312e38;
  margin-top: 3rem;
  padding: 0rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  overflow: hidden;

  p {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
    color: #f90;

    margin-top: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 4.6rem;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const FooterLink = styled(Link)`
  width: 13rem;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e04343;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Order = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  & + div {
    margin-top: 0.5rem;
  }
`;
