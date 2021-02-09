import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import charactersPage from '../../containers/charactersPage';
import DetailsPage from '../details/DetailsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={charactersPage} />
        <Route exact path="/detail/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}
