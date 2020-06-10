import React from 'react';

export const themes = {
  light: {
    foreground: '#000',
    background: '#eee',
  },
  dark: {
    foreground: '#fff',
    background: '#000',
  },
  default: {
    foreground: '#f7f8f9',
    background: '#fff',
  }
};

export const ThemeContext = React.createContext({
  theme: themes.default, // default value
  setTheme: () => {} // default empty function
});
