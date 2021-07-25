import styled, { css } from 'styled-components';

export const Card = styled.div`
  background-color: #312e38;
  border: 2px solid #312e38;
  margin: 0 1.5rem;
  height: 22rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  width: 15rem;
  cursor: pointer;

  padding: 0.5rem 0.5rem 0 0.5rem;

  ${props =>
    props.isActive &&
    css`
      border: 2px solid #f90;
      box-shadow: 12px 12px 15px rgba(0, 0, 0, 0.3);
    `}

  &:hover {
    box-shadow: none;
    border: 2px solid #f90;
  }
`;

export const ImageCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  span {
    color: #f90;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #fff;
`;

export const ContentCard = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.1rem;
  }
`;
