import React from 'react';

import * as styled from './styles';

const Buttons = ({ label, mode, buttonRef, customClass, handler, ...rest }) => {

  return (<>
    {
      (() => {
        switch (mode) {
          case 'main':
            return (<styled.MainButton ref={buttonRef} className={`${customClass}`} {...rest} >
              {label}
            </styled.MainButton>);
          case 'important':
            return (<styled.ImportantButton ref={buttonRef} className={`${customClass}`} {...rest} >
              {label}
            </styled.ImportantButton>);
          case 'facebook':
            return (<styled.FacebookButton ref={buttonRef} className={`${customClass}`} {...rest} >
              Facebook
            </styled.FacebookButton>);
          case 'google':
            return (<styled.GoogleButton ref={buttonRef} className={`${customClass}`} {...rest} >
              Google
            </styled.GoogleButton>);
          case 'simple-text':
            return (<styled.SimpleTextButton ref={buttonRef} className={`${customClass}`} {...rest} onClick={handler}>
              {label}
            </styled.SimpleTextButton>);
          default:
            return (<div></div>);
        }
      })()
    }
  </>);
}

export default Buttons;