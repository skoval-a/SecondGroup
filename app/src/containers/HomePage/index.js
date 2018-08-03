import React, { Component } from 'react';

import  {
  SearchInput,
  UsersList,
  ActiveUser,
  // Dropdown,
} from '../../components';

import data from '../../data.txt';
import '../../App.css';


const listDropdowns = [
  {
    name: 'Button 1',
  },
  {
    name: 'Button 2',
  },
  {
    name: 'Button 3',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: null,
      currentPage: 0,
      listPages: null,
      isErrorUser: false,
      listDropdowns,
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
    console.log('config.activeUser',config.activeUser);
    if(config.activeUser) {
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

  isContentDropdown = (item, index) => {
    const listDropdowns = [...this.state.listDropdowns];
    listDropdowns[index].isOpen = !listDropdowns[index].isOpen;
    this.setState({
      listDropdowns,
    });
  }

  render() {
    const addUser = {
      type: 'ADD_USER',
      
    };

    console.log('listDropdowns', this.state.listDropdowns);
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
        {/* <div>
          {
            listDropdowns.map((item, index) =>
            <Dropdown
              key={index}
              title={item.name}
              isOpenDropdown={item.isOpen}
              isContentDropdown={() => this.isContentDropdown(item, index)}
            />)
          }
        </div> */}
        <div className="home__header">
          <SearchInput
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
