import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #65587f;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

`;

export const CardStyle = `
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
`;
