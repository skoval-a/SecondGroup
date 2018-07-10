import React, { Component } from 'react';
import SearInput from '../../components/SearchInput';

import logo from '../../logo.svg';
import '../../App.css';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    return (
      <div>
       <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='wrapper'>
          <div className="sub-header">
            <SearInput
              
            />
          </div>
          <div className='home-content'>
            <div className='sidebar'>
              123
            </div>
            <div className='wrap-users'>
              <div className="usersHeader">
                <h2 className='usersHeader__title'>Users</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}