import { connect } from 'react-redux';
import Greeting from './greeting.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = state  => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
