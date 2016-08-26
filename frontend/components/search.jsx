import React from 'react';
import BenchMap from './bench_map.jsx';
import BenchIndex from './bench_index.jsx';


const Search = ({ benches, requestBenches, updateBounds }) => (
  <div className="search">
    <BenchIndex benches={benches} requestBenches={requestBenches} />
    <BenchMap benches={benches} updateBounds={updateBounds}/>
  </div>
);


export default Search;
