import styled from 'styled-components';

export const InputContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;

  input {
    height: 50px;
    padding: 0 15px 0 40px;
    border-radius: 5px; 
    border: 1px solid ${(props) => props.theme.textColors.fourth};
    width: 100%;
    color: ${(props) => props.theme.textColors.secondary};
    transition: all .2s ease-in-out;

    &::placeholder {
      color: ${(props) => props.theme.textColors.third};
    }
    
    &:focus {
      border: 1px solid ${(props) => props.theme.textColors.secondary};
      color: ${(props) => props.theme.textColors.secondary};
      transition: all .2s ease-in-out;

      &::placeholder {
        color: ${(props) => props.theme.textColors.secondary};
      }

      & + div {
        transition: all .2s ease-in-out;
        background-color: ${props => props.theme.textColors.secondary};
      }
    }
  }
`;

export const InputWithoutIconContainer = styled(InputContainer)`
  input {
    padding: 0 15px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 12px;
  background-color: ${props => props.theme.textColors.fifth};
  -webkit-mask: url(${props => props.icon}) no-repeat center;
  mask: url(${props => props.icon}) no-repeat center;
  mask-size: contain;
  width: 16px;
  height: 16px;
  transition: all .2s ease-in-out;
`;