import styled from 'styled-components';

export const Container = styled.button`
  width: 20rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e04343;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  > svg {
    margin-right: 1rem;
    font-size: 1.3rem;
  }

  :hover {
    filter: brightness(0.9);

    > svg {
      transform: rotate(360deg);
      transition: 1s;
    }
  }
`;
