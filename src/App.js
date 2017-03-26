import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = ({ message }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React-Reux</h2>
    </div>
    <p className="App-intro">
      Message from the store: {message}
    </p>
  </div>
);

const connectApp = connect(state => ({
  message: state.message
}));

export default connectApp(App);
