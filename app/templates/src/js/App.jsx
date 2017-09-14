import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './containers/Main';


const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, global.document.getElementById('root'));
