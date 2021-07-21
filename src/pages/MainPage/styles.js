import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  > h2 {
    margin-top: 0.8rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 500px) {
      margin-left: 2rem;
      margin-top: 2rem;

      text-align: left;
      font-size: 1.3rem;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 500px) {
    width: 19rem;
    margin-left: 2rem;
    text-align: left;
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  max-height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  margin-left: 1rem;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
    align-items: none;
  }
`;
