import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

const store = createStore(reducer, enhancer);

export default store
