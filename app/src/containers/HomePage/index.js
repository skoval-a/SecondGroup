import React, { Component } from 'react';

import SearInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';
import ActiveUser from '../../components/ActiveUser';

import data from '../../data.txt';
import logo from '../../logo.svg';
import '../../App.css';
import ItemUser from '../../components/ItemUser';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: null,
      currentPage: 0,
      listPages: null,
      isErrorUser: false,
    };
  }

  componentWillMount() {
    fetch(data)
    .then(response => response.json())
    .then(data => {
      this.setState({
        defaultUsers: [...data],
        data,
        activeUser: data[0],
      });
    })
  }

  updateApp(config) {
    this.setState(config);
    if(config.activeUser.id === this.state.activeUser.id) {
      this.setState({
        isErrorUser: true,
      })
    } else {
      this.setState({
        isErrorUser: false,
      });
    }
  }

  search = (e) => {
    const value = e.target.value.toLowerCase();
    const fillter = this.state.defaultUsers.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    this.updateApp({
      data: fillter,
      currentPage: 0,
    });
  }
  
  sort = (type) => {
    const { data } = this.state;
    const dataUsers = data;
    const sorted = dataUsers.sort((a, b) => {
      return a[type] > b[type] ? 1 : -1;
    });
    this.setState({
      data: sorted,
    });
  }

  splitUsers = () => {
    const {
      data,
      currentPage,
    } = this.state;
    return data && data.slice(currentPage * 15, currentPage * 15 + 15);
  }
  
  handlePagitaion = (number) => {
    const { currentPage, data } = this.state;
    const listPages = Math.ceil(data.length / 15);
    if(number + currentPage >= 0 && number + currentPage < listPages) {
      this.setState(prev => (console.log(prev),{
        listPages,
        currentPage: prev.currentPage + number,
      }))
    }
  }

  reset = () => {
    this.updateApp({
      data: this.state.defaultUsers,
      activeUser: this.state.defaultUsers[0],
    });
  }

  render() {
    const buttonsList = [
      {
        name: 'Name',
        icon: 'fa-users',
        onClick: () => this.sort('name'),
      },
      {
        name: 'Age',
        icon: 'fa-ban',
        onClick: () => this.sort('age'),
      },
      {
        name: 'Reset',
        icon: 'fa-ban',
        onClick: this.reset,
      },
    ];
    const {
      data,
      listPages,
      currentPage,
      isErrorUser,
    } = this.state;
    return (
      <div className='home'>
       <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="home__header">
          <SearInput
            isError={data && data.length === 0}
            searchValue={this.search}
          />
          <div className='rowSorting'>
            {
              buttonsList.map((item, id) =>
              <button
                key={id}
                type='button'
                onClick={item.onClick}
                className='btn btn-primary'
              >
                <i className={`fa ${item.icon}`}></i>
                <p className='btnName'>
                  {item.name}
                </p>
              </button>)
            }
          </div>
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <div className='sidebar'>
              <ActiveUser
                isErrorUser={isErrorUser}
                user={this.state.activeUser}
              />
            </div>
          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList
              handlePagitaion={this.handlePagitaion}
              currentPage={currentPage}
              listPages={listPages}
              data={this.splitUsers()}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
