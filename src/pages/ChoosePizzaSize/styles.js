import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  > h2 {
    margin-top: 0.8rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 500px) {
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
  flex-wrap: wrap;
  gap: 2.5rem;

  @media (max-width: 500px) {
    justify-content: flex-start;
    align-items: none;
  }
`;
