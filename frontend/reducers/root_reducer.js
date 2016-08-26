import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducer.js';
import FiltersReducer from './filter_reducer.js';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  filters: FiltersReducer
});

export default RootReducer;
