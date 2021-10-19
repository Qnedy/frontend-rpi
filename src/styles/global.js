import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .margin-bottom-36 {
      margin-bottom: 36px;
    }

    .margin-top-10 {
      margin-top: 10px;
    }

    .margin-top-15 {
      margin-top: 15px;
    }

    .container--flex-end {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

  * {
    outline: none;
    margin: 0px;
    padding: 0px;
    font-weight: 400;
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