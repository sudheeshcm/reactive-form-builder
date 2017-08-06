import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';

import reducer from './reducers/itemsReducer';

const middleware = applyMiddleware(/* thunk, logger() */);

export default createStore(reducer, middleware);
