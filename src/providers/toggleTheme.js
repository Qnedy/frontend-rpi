import React, { createContext, useState } from "react";
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export const ToggleThemeContext = createContext({});

const ToggleTemaProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem('@Frontend-rpi-theme');

    const { frontendrpiTheme } = JSON.parse(themeStorage ? themeStorage : '{}');

    if(frontendrpiTheme === 'light'){
      return dark;
    }

    return light;
  });

  const toggleTheme = () => {
    localStorage.setItem('@Frontend-rpi-theme', JSON.stringify({ frontendrpiTheme: theme.title === 'dark' ? 'light' : 'dark' }));
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ToggleThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ToggleThemeContext.Provider>

  )
}

export default ToggleTemaProvider;