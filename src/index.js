import React from 'react';
import ReactDOM from 'react-dom';

import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';

import App from './App';

const GlobalStyle = createGlobalStyle`${globalStyle()}`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);