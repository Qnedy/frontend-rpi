import React from 'react';

import * as styled from './styles';

const Inputs = ({ placeholder, mode, inputRef, customClass, icon, ...rest }) => {

  return (<>
    {
      (() => {
        switch (mode) {
          case 'normal':
            return (<styled.InputContainer ref={inputRef} className={`${customClass}`} >
              <input type="text" placeholder={placeholder} {...rest}/> <styled.Icon icon={icon} />
            </styled.InputContainer>);
          case 'normal-without-icon':
            return (<styled.InputWithoutIconContainer ref={inputRef} className={`${customClass}`} >
              <input type="text" placeholder={placeholder} {...rest}/>
            </styled.InputWithoutIconContainer>);
          default:
            return (<div></div>);
        }
      })()
    }
  </>);
}

export default Inputs;