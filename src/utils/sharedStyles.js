import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    line-height: 1.44;
    font-family: 'Muli', sans-serif!important;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
  }
`;

export default GlobalStyle;
