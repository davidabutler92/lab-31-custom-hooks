import React from 'react';
import { BrowserRouter as Router, Route, Swtich } from 'react-router-dom';

import Header from '../header/Header';
import List from '../list/List';
import DetailsPage from '../details/DetailsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Swtich>
        <Route exact path="/" component={List} />
        <Route exact path="/detail/:id" component={DetailsPage} />
      </Swtich>
    </Router>
  );
}
