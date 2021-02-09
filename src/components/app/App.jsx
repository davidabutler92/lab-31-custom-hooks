import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import List from '../list/List';
import DetailsPage from '../details/DetailsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/detail/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}
