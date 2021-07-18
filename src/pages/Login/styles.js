import styled from "styled-components";
import backgroundImg from "../../assets/background_login.jpg";

export const Container = styled.div`
  position: relative;
  padding: 0 1.5rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: 0%, 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;

  @media (max-width: 500px) {
    background-size: cover;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  width: 20rem;
`;
