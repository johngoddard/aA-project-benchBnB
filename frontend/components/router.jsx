import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './app.jsx';
import SearchContainer from './bench_search/search_container.js';
import BenchFormContainer from './bench_form/bench_form_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import {connect} from 'react-redux';
import {clearErrors} from '../actions/session_actions.js'

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace){
    if (window.currentUser) {
      replace('/');
    }
  }

  _requireLoggedIn(nextState, replace){
    if(!window.currentUser){
      replace('/login')
    }
  }


  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={SearchContainer}/>
          <Route path='/login' component={SessionFormContainer}
                               onEnter={this._redirectIfLoggedIn}
                               onLeave={this.props.clearErrors}
                               />;
          <Route path='/signup' component={SessionFormContainer}
                                onEnter={this._redirectIfLoggedIn}
                                onLeave={this.props.clearErrors}
                                />;
          <Route path='benches/new' component={BenchFormContainer} />
        </Route>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(null, mapDispatchToProps)(AppRouter);
