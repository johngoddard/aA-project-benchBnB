import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducer.js';

const RootReducer = combineReducers({
  benches: BenchesReducer
});

export default RootReducer;
