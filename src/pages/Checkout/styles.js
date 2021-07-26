import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const animateAddress = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

const animate = keyframes`
  0% {
    opacity: 0;
  }
  100%{
   opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 4.9rem);
  animation: ${animate} 0.6s;

  @media (max-width: 500px) {
    height: calc(100vh - 4rem);
  }
`;

export const MainContainer = styled.div`
  max-width: 1300px;
  margin: 1rem auto 0 auto;
  width: 100%;
  padding: 0 2rem;
`;

export const Title = styled.div`
  margin-top: 2rem;
  h2 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    margin-top: 1.5rem;
  }
`;

export const MainCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerMainInfo = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  background: #312e38;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  overflow: hidden;

  footer {
    display: flex;
    flex-direction: column;

    label {
      cursor: pointer;
      width: 13rem;
      font-size: 1.1rem;

      & + label {
        margin-top: 1rem;
      }

      input[type='checkbox'] {
        margin-right: 1rem;
        cursor: pointer;
        position: relative;
      }

      input[type='checkbox']:before {
        content: '';
        display: block;
        position: absolute;
        width: 20px;
        border-radius: 0.2rem;
        height: 20px;
        top: -5px;
        left: 0;
        background-color: #f90;
      }
      input[type='checkbox']:checked:after {
        content: '';
        display: block;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: -3px;
        left: 7px;
      }
    }
  }
`;

export const ContainerMainOder = styled.div`
  width: 47%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const MainOder = styled.div`
  background: #312e38;
  height: calc(100% - 4.2rem);
  overflow: hidden;
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 0.5rem;

  p {
    line-height: 1.5rem;
    font-size: 1.1rem;

    margin-top: 1rem;
  }

  span {
    border-bottom: 1px solid #f90;
    display: block;
    font-size: 1.1rem;
    padding-bottom: 0.3rem;
  }
`;

export const Address = styled.div`
  animation: ${animateAddress} 0.9s;
  margin-top: 2rem;

  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.5rem;
    outline: 0;
    background-color: #f1f1f1;

    + input {
      margin-top: 0.5rem;
    }
  }

  textarea {
    margin-top: 0.5rem;
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 0.5rem;
    outline: 0;
    min-height: 5rem;
    resize: vertical;
  }
`;

export const User = styled.div`
  animation: ${animateAddress} 0.9s;

  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.5rem;
    outline: 0;
    background-color: #f1f1f1;

    + input {
      margin-top: 0.5rem;
    }
  }

  textarea {
    margin-top: 0.5rem;
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 0.5rem;
    outline: 0;
    min-height: 5rem;
    resize: vertical;
    background-color: #f1f1f1;
  }
`;

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 4.6rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const FooterLink = styled(Link)`
  width: 13rem;
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
    margin-left: 0.5rem;
  }

  :hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

export const Order = styled.div`
  position: relative;

  > div {
    flex: 1;
  }

  button {
    position: absolute;
    top: 0.4rem;
    right: 0;
    background: transparent;
    border: 0;

    svg {
      font-size: 1.3rem;
      margin-left: 1rem;
      color: #e04343;
      transition: filter 0.2s;

      :hover {
        filter: brightness(0.8);
      }
    }
  }
`;
