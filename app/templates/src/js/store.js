import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import main from './reducers';

export const history = createHistory();
const middleware = applyMiddleware(thunk);
// const composeEnhancers = global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(main, middleware);

export default store;
