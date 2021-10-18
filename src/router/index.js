import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { ToggleThemeContext } from '../providers/toggleTheme';

import LoginScreen from '../screens/Login';
import ResetPasswordScreen from '../screens/ResetPassword';
import UpgradePlanScreen from '../screens/UpgradePlan';

const AppRoutes = () => {
   const { theme } = useContext(ToggleThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginScreen} />
          <Route path="/reset-password" component={ResetPasswordScreen} />
          <Route path="/upgrade-plan" exact component={UpgradePlanScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoutes;