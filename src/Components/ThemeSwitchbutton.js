// src/components/ThemeSwitchButton.js
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from '../ThemeContext';

const ThemeSwitchButton = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      Switch to {themeMode === 'light' ? 'dark' : 'light'} mode
    </Button>
  );
};

export default ThemeSwitchButton;
