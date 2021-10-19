import styled from 'styled-components';

export const Container = styled.div`
  min-width: 344px;
  max-width: 344px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn .2s ease-in-out forwards;

  form {
    width: 100%;
    margin-top: 36px;
    margin-bottom: 50px;
  }

  @media screen and (max-height: 750px) {
    padding: 5% 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const PageHeader = styled.header`

  img {
    width: 100%;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => props.theme.textColors.primary};
  }
`;

export const PageFooter = styled.footer`
  width: 100%;

  p {
    text-align: center;
    color: ${(props) => props.theme.textColors.sixth};
  }

  
`;