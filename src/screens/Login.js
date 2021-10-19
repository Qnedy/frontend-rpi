import React from 'react';

import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

import userIcon from '../assets/images/global/username-icon.svg';

const LoginScreen = () => {
  return (
    <div className="container">
      <Inputs mode="normal" placeholder="example@example.com" icon={userIcon} altIcon="user icon" />

      <Buttons label="log in" mode="main" />
    </div>
  )
}

export default LoginScreen;