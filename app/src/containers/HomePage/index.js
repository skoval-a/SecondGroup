import React, { Component } from 'react';

import SearInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';
import ActiveUser from '../../components/ActiveUser';

import data from '../../data.txt';
import logo from '../../logo.svg';
import '../../App.css';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: null,
    };
  }


  componentWillMount() {
    fetch(data)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data.splice(0,20),
      });
    })
  }

  updateApp(config) {
    this.setState(config);
  }

  render() {
    const {
      data,
    } = this.state;
    console.log('usersList', this.state.activeUser);
    return (
      <div className='home'>
       <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="home__header">
          <SearInput
            
          />
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <div className='sidebar'>
              <ActiveUser
                user={this.state.activeUser}
              />
            </div>
          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList
              data={data}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}