import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import charactersPage from '../../containers/charactersPage';
import detailsContainer from '../../containers/detailsContainer';

// const ThemeContext = createContext('light');
// console.log(ThemeContext, 'themeContext');

export default function App() {
  // const [value, setValue] = useState(true);
  // const lightOrDarkValue = value ? 'light' : 'dark';

  // const handleClick = React.useCallback(
  //   () => setValue(value => !value),
  //   [setValue]
  // );

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={charactersPage} />
        <Route path="/detail/:id" component={detailsContainer} />
      </Switch>
    </Router>
  );
}
