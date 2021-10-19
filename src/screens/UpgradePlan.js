import React from 'react';

import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

import userIcon from '../assets/images/global/username-icon.svg';
import passwordIcon from '../assets/images/global/password-icon.svg';
import upgradePlanIllustration from '../assets/images/upgrade-plan-screen/upgrade-plan.svg';

import * as styled from './styles/styles';

const UpgradePlanScreen = () => {
  return (
    <styled.Container>
      <styled.PageHeader>
        <h4 className="title margin-bottom-36">Get Pro Account</h4>

        <img src={upgradePlanIllustration} alt="woman logging in" />
      </styled.PageHeader>

      <form onSubmit={() => {}} >
        <Inputs mode="normal-without-icon" placeholder="Card Number" customClass="margin-bottom-36" />

        <div className="margin-bottom-36">
          <div className="flex-container-column">
            <div className="flex-container input--48-width">
              <Inputs mode="normal-without-icon" placeholder="MM/YY" />
              <Inputs mode="normal-without-icon" placeholder="CVV" />
            </div>
            
            <div className="container--flex-end">
              <Buttons mode="simple-text" label="What's this?" customClass="margin-top-5 tip-color"/>
            </div>
          </div>

          <Inputs mode="normal-without-icon" placeholder="ZIP/Postal Code" customClass="margin-top-15"/>
        </div>

        <Buttons mode="important" label="upgrade" type="submit" customClass="margin-top-15" />
      </form>
    </styled.Container>
  )
}

export default UpgradePlanScreen;