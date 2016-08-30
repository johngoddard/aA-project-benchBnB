import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
