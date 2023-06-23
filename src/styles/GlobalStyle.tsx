import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  h1{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
    font-weight:700;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
