import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import AppProvider from './components/AppProvider/AppProvider';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
