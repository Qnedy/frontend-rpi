import React from 'react';

import * as styled from './styles';

const Buttons = ({ label, mode, buttonRef, customClass, ...rest }) => {

  return (<>
    {
      (() => {
        switch (mode) {
          case 'main':
            return (<styled.MainButton ref={buttonRef} className={`${customClass}`}
              {...rest}
              >
              {label}
            </styled.MainButton>);
          case 'important':
            return (<styled.ImportantButton ref={buttonRef} className={`${customClass}`}
              {...rest}
              >
              {label}
            </styled.ImportantButton>);
          default:
            return (<div></div>);
        }
      })()
    }
  </>);
}

export default Buttons;