import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to react</h1>
      </header>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;