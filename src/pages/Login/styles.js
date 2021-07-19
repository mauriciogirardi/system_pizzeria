import styled from 'styled-components';
import backgroundImg from '../../assets/forno.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 20rem;
`;

export const Line = styled.p`
  font-family: 'Poppins', sans-serif;
  position: relative;
  margin: 2rem 0;

  ::after {
    content: '';
    width: 8rem;
    height: 1px;
    background: #fff;
    left: 2rem;
    top: 0.7rem;
    position: absolute;
  }

  ::before {
    content: '';
    width: 8rem;
    height: 1px;
    background: #fff;
    right: 2rem;
    top: 0.7rem;
    position: absolute;
  }
`;
