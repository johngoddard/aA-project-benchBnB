import { BenchConstants } from '../actions/bench_actions.js';
import { FilterConstants } from '../actions/filter_actions.js';
import { fetchBenches, postBench } from '../util/bench_api_util.js';
import { receiveBenches, requestBenches, createBench, receiveBench } from '../actions/bench_actions.js';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      const filters = getState().filters;
      fetchBenches(filters, success);
      return next(action);
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
      break;
    case BenchConstants.CREATE_BENCH:
      const success2 = data => dispatch(receiveBench(data));
      postBench(action.bench, success2);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
