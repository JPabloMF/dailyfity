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
    background-attachment: fixed;
    min-height: 100vh;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c68bff;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
  }
`;
