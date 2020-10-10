import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer.js';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// then run the saga
sagaMiddleware.run(mySaga);

export default store;
