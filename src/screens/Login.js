import React from 'react';

import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

import userIcon from '../assets/images/global/username-icon.svg';
import passwordIcon from '../assets/images/global/password-icon.svg';
import loginIllustration from '../assets/images/login-screen/login.svg';

import * as styled from './styles/styles';

const LoginScreen = () => {
  return (
    <styled.Container>
      <styled.PageHeader>
        <img src={loginIllustration} alt="woman logging in" />
        <h4 className="title">Welcome Back!</h4>
      </styled.PageHeader>

      <form onSubmit={() => {}} >
        <Inputs mode="normal" placeholder="example@example.com" icon={userIcon} altIcon="user icon" customClass="margin-bottom-36" />

        <div className="margin-bottom-36">
          <Inputs mode="normal" placeholder="Password" icon={passwordIcon} altIcon="password icon" type="password"/>

          <div className="container--flex-end">
            <Buttons mode="simple-text" label="Forgot Password?" customClass="margin-top-10"/>
          </div>
        </div>

        <Buttons mode="main" label="log in" type="submit" customClass="margin-top-15" />
      </form>

      <styled.PageFooter>
        <p className="margin-bottom-36">Or connect with social</p>

        <div className="flex-container">
          <Buttons mode="facebook" />
          <Buttons mode="google" />
        </div>
      </styled.PageFooter>
      
    </styled.Container>
  )
}

export default LoginScreen;