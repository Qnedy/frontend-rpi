import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .margin-bottom-36 {
      margin-bottom: 36px;
    }

    .margin-top-5 {
      margin-top: 5px;
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

    .flex-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .flex-container-column {
      flex-direction: column;
    }

    .input--48-width {

      div {
        width: 48%;
      }
    }

    .tip-color {
      color: #767676;
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