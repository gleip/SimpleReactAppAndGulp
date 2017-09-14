import React from 'react';
import { render } from 'react-dom';

import Main from './containers/Main';


const App = () => <Main />;

render(<App />, global.document.getElementById('root'));
