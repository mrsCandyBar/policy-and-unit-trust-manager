import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Routing from './routing/index';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/reducers';
import * as serviceWorker from './assets/scripts/serviceWorker';

const middleware = [
  thunk
];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(...middleware),
))

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();