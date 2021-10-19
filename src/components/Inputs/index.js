import React from 'react';

import * as styled from './styles';

const Inputs = ({ placeholder, mode, inputRef, customClass, icon, altIcon, ...rest }) => {

  return (<>
    {
      (() => {
        switch (mode) {
          case 'normal':
            return (<styled.InputContainer ref={inputRef} className={`${customClass}`} {...rest}>
              <input type="text" placeholder={placeholder} /> <styled.Icon icon={icon} />
            </styled.InputContainer>);
          default:
            return (<div></div>);
        }
      })()
    }
  </>);
}

export default Inputs;