import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import { Initial } from './state/actions';
import { rootReducer } from './state/reducers';

const reduxReducer = (state, action) => (
  state === undefined
  ? rootReducer (Initial.value) ({})
  : rootReducer (action.data) (state)
);

const pureMiddleware = store => next => action => (
  next({
    type: action.constructor.name,
    data: action
  })
);

const store = createStore(reduxReducer, applyMiddleware(
  pureMiddleware
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
