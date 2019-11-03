import { createGlobalStyle } from 'styled-components';
import img1 from '../assets/img/backgrounddailfity.png';
import img2 from '../assets/img/backgrounddailfity-dark.png';

export const GlobalStyle = createGlobalStyle<{ whiteTheme: boolean }>`
  body {
    margin: 0;
    background-color: ${(props) => (props.whiteTheme ? '#e9e9f1' : '#333945')};
    background-image: url(${(props) => (props.whiteTheme ? img1 : img2)});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`;
