import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'assets/background.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #312e38 url(${backgroundImg}) no-repeat;
    background-size: cover;
    color: #fff;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 500px) {
    background-size: auto;
    }
  }

  body, input, button, textarea {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
