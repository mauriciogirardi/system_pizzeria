import styled from "styled-components";

export const Container = styled.button`
  margin-top: ${(props) => props.top};
  width: 20rem;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #ff9000;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  > svg {
    margin-right: 1rem;
    font-size: 1.3rem;
  }

  :hover {
    filter: brightness(0.9);
  }
`;
