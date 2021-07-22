import styled from 'styled-components';

export const Container = styled.div`
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #f90;
  }
  .slick-dots li button:before {
    font-size: 10px;
    line-height: 40px;
    color: #f90;
  }

  width: 900px;
  margin-top: 2.5rem;
  @media (max-width: 800px) {
    width: 35rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 3rem;
  }
  @media (max-width: 360px) {
    margin-right: 1rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 375px) {
    margin-left: 1rem;
    margin-bottom: 5rem;
  }
`;
