import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './app.jsx';
import SearchContainer from './bench_search/search_container.js';
import BenchFormContainer from './bench_form/bench_form_container.js';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={SearchContainer}/>
      <Route path='benches/new' component={BenchFormContainer} />
    </Route>
  </Router>
);

export default AppRouter;
