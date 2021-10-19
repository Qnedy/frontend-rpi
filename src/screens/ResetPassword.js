import React from 'react';
import { useHistory } from 'react-router-dom';

import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

import userIcon from '../assets/images/global/username-icon.svg';
import resetPasswordIllustration from '../assets/images/reset-password-screen/reset-password.svg';

import * as styled from './styles/styles';

const ResetPasswordScreen = () => {
  const history = useHistory();
  
  return (
    <styled.Container>
      <styled.PageHeader>
        <img src={resetPasswordIllustration} alt="woman changing his password" className="margin-bottom-36" />
        <h4 className="title">Forgot Password</h4>
      </styled.PageHeader>

      <form onSubmit={() => {}} >
        <Inputs 
          mode="normal" 
          placeholder="example@example.com" 
          icon={userIcon} 
          customClass="margin-bottom-36" 
          required={true}
        />

        <Buttons mode="main" label="reset" type="submit" customClass="margin-top-15" />
      </form>

      <styled.PageFooter>
        <p className="margin-bottom-36">Already have an account? <Buttons mode="simple-text" label="Login here" handler={() => history.push('/')}/></p>
      </styled.PageFooter>
    </styled.Container>
  )
}

export default ResetPasswordScreen;