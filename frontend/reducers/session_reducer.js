import { SessionConstants } from '../actions/session_actions.js';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state=_nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, {currentUser: action.user});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, _nullUser, {errors: action.errors.responseJSON});
    case SessionConstants.LOGOUT:
      return merge({}, _nullUser, {currentUser: null});
    case SessionConstants.CLEAR_ERRORS:
      return Object.assign({}, state, {errors:[]});
    default:
      return state;
  }
};

export default SessionReducer;
