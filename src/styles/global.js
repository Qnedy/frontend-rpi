import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .container {
      min-width: 344px;
      max-width: 344px;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  * {
    outline: none;
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    margin: 0px;
  }

  ul, li {
    margin: 0px;
    list-style-type: none;
  }

  input, textarea {
    outline: none;
    border: none;
  }

`;