import React, { createContext, useState } from 'react';
import styles from '../../theme';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const mode = styles[theme];
  const value = { setTheme, theme };

  return (
    <AppContext.Provider value={value}>
      <div style={mode}>{children}</div>
    </AppContext.Provider>
  );
};

export default AppProvider;
