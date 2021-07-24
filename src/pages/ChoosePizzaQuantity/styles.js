import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 4.9rem);

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
