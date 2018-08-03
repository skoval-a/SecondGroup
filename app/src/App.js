import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/HomePage';
import About from './containers/About';
import { HeaderTop } from './components';

class App extends Component {

  render() {
    const menu = [
      {
        title: 'Home page',
        path: '/',
        exact: true,
      },
      {
        title: 'About',
        path: '/About',
      },
    ];
    return (
      <Router>
        <div className="App">
          <HeaderTop
            data={menu}
          />
          <Route path='/' exact={true} component={Home} />
          <Route path='/About' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
