import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './app.jsx';
import SearchContainer from './search_container.js';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={SearchContainer}/>
    </Route>
  </Router>
);

export default AppRouter;
