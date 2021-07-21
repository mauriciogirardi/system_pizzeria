import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.5);

  > img {
    width: 15rem;
  }

  @media (max-width: 500px) {
    justify-content: flex-end;
    > img {
      display: none;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    margin-right: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  > button {
    background: transparent;
    border: 0;

    svg {
      color: #e04343;
      font-size: 1.8rem;
    }

    @media (max-width: 500px) {
      position: absolute;
      top: 1.1rem;
      left: 1rem;
    }
  }
`;

export const Image = styled.div`
  background: #ccc;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const Line = styled.div`
  height: 3rem;
  width: 1px;
  background-color: #ff9000;
  margin: 0 1rem;

  @media (max-width: 500px) {
    display: none;
  }
`;
