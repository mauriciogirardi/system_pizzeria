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
