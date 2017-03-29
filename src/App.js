import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { connectAppProps, connectAppDispatch } from './state/connect';

const App = ({ message, count, increment, decrement }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React-Reux</h2>
    </div>
    <p className="App-intro">
      Message from the store: {message}
    </p>
    <pre>count is {count}</pre>
    <button onClick={() => increment(5)}>+</button>
    <button onClick={() => decrement(3)}>-</button>
  </div>
);

const connectApp = connect(connectAppProps, connectAppDispatch);

export default connectApp(App);
