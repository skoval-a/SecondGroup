import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

const menu = [
  {
   title: 'About',
  },
  {
    title: 'Portfolio',
   }
];

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHeaderClass: false,
      isTab: 'oneTab',
    };
   }

   toggleDropdown = (name) => {
    this.setState({
      isTab: name,
    });
   }

   isShowTabs = (name) => {
    switch(name) {
      case 'oneTab': return <h1>TAB 1</h1>
      case 'twoTab': return <h1>TAB 2</h1>
      default: break;
    }
   }

  render() {
    return (
      <div className="App">
        <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.toggleDropdown('oneTab')}>
          Toggle Dropdown One
        </button>
        <button onClick={() => this.toggleDropdown('twoTab')}>
          Toggle Dropdown Two
        </button>
        {this.isShowTabs(this.state.isTab)}
      </div>
    );
  }
}

export default App;
