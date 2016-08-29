import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

import * as ACTIONS from './actions/session_actions.js';


document.addEventListener('DOMContentLoaded', () => {

  const store = window.store = configureStore();

  window.login = user => {store.dispatch(ACTIONS.login(user));}
  window.logout = () => {store.dispatch(ACTIONS.logout());}
  window.signup = user => {store.dispatch(ACTIONS.signup(user));}

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
