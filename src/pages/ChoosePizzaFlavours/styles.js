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

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;
