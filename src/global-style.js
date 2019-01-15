import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';
import background from './img/background.jpg';

export const Global = createGlobalStyle`
  ${globalStyle()}
  body {
    color: white;
    background: url(${background}) white; 
  }
`;