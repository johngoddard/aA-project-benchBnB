import React from 'react';
import AppRouterContainer from './router.jsx';
import {Provider} from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
     <AppRouterContainer />
   </Provider>
);

export default Root;
