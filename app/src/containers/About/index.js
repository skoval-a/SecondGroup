import React, { Component } from 'react';

export default class About extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    window.localStorage.setItem('_login', value);

  }

  render() {
    return (
      <h1>
        This is about page

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Enter text' />
          <button type="submit">
            Enter
          </button>
        </form>
      </h1>
    );
  }
}