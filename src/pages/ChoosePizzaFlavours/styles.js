import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 500px) {
    width: 19rem;
    text-align: left;
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  max-height: 410px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 500px) {
    justify-content: flex-start;
    align-items: none;
  }
`;
