import React, { createContext, useState } from 'react';
import styles from '../../theme';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  console.log(children, 'children');
  const [theme, setTheme] = useState('light');

  const mode = styles[theme];
  const value = { setTheme, theme };

  return (
    <AppContext.Provider value={value}>
      <div style={mode}>{children}</div>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.object,
};

export default AppProvider;
