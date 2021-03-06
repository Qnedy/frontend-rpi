import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px 0;
  height: 50px;
  border-radius: 8px; 
  text-transform: uppercase;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  font-size: 16px;
  color: ${(props) => props.theme.textColors.seventh};
  cursor: pointer;
`; 

export const MainButton = styled(Button)`
  background-color: ${(props) => props.theme.backgroundColors.primary};
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }
`;

export const ImportantButton = styled(Button)`
  background-color: ${(props) => props.theme.backgroundColors.fourth};
`;

export const FacebookButton = styled(Button)`
  height: 40px;
  padding: 0px;
  border-radius: 5px;
  width: 48%;
  background-color: ${(props) => props.theme.backgroundColors.secondary};
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }
`;

export const GoogleButton = styled(FacebookButton)`
  background-color: ${(props) => props.theme.backgroundColors.third};
`;

export const SimpleTextButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  background: transparent;
  border: 0px;
  color: ${(props) => props.theme.textColors.secondary};
`;