import { connect } from 'react-redux';
import { requestBenches } from '../actions/bench_actions.js';
import Search from './search.jsx';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
