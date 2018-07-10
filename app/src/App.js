import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      
    };
   }


  render() {
    return (
      <div className="App">
        <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
