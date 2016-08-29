import React from 'react';
import BenchIndexItem from '../benches/bench_index_item.jsx';

class BenchIndex extends React.Component {

  render(){
    let benches = this.props.benches ? this.props.benches : {};
    return (
    <div className="bench-index-div">
      <h2>All the benches</h2>
      <ul>
        {Object.keys(benches).map(id => <BenchIndexItem bench={benches[id]}
                                                        key={id}/>) }
      </ul>
    </div>
  );
  }
}

export default BenchIndex;
