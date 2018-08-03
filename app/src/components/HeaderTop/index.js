import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <React.Fragment>
      <header className={`App-header`}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <nav>
        {
          props.data && props.data.map((item, id) =>
          <NavLink
            to={item.path}
            exact={item.exact}
          >
            {item.title}
          </NavLink>)
        }
      </nav>
    </React.Fragment>
  );
}