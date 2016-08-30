import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducer.js';
import FiltersReducer from './filter_reducer.js';
import SessionReducer from './session_reducer.js';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  filters: FiltersReducer,
  session: SessionReducer
});

export default RootReducer;
