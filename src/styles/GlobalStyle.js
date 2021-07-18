import { createGlobalStyle } from "styled-components";

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
    background-color: #080808;
    color: #f1f1f1;
    -webkit-font-smoothing: antialiased;
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

`;
