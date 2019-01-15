import React from 'react';
import ReactDOM from 'react-dom';

import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';
import background from './img/background.jpg';

import App from './App';

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}
  body {
    color: white;
    background: url(${background}) white; 
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);