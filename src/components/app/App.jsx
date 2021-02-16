import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import CharactersPage from '../../containers/CharactersPage';
import DetailsContainer from '../../containers/DetailsContainer';

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
        <Route exact path="/" component={CharactersPage} />
        <Route path="/detail/:id" component={DetailsContainer} />
      </Switch>
    </Router>
  );
}
