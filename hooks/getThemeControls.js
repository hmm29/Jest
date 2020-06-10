import React, { useState } from 'react';
import { themes } from '../contexts/ThemeContext';

export default function getThemeControls() {
  return useState(themes.default);
}
