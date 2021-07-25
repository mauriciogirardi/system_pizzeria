import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 2rem;
  margin-top: 5rem;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const FooterInfo = styled.div`
  p {
    line-height: 2rem;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 27rem;

  @media (max-width: 500px) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e04343;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}

  svg {
    font-size: 1.3rem;
  }

  :hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

export const ButtonBack = styled.button`
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e04343;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s;

  svg {
    font-size: 1.3rem;
  }

  :hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;
