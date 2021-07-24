import styled from 'styled-components';

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
