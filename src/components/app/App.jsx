import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import charactersPage from '../../containers/charactersPage';
import detailsContainer from '../../containers/detailsContainer';

export default function App() {
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
