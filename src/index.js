import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Error';
import { GlobalStyles } from './styles/GlobalStyle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
