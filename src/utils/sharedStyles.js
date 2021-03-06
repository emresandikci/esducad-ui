import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    line-height: 1.44;
    font-family: 'Muli', sans-serif!important;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style: none;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    font-size:16px;
  }
`;

export default GlobalStyle;
