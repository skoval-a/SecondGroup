import React, { Component } from 'react';
import { connect } from 'react-redux';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '1',
    };
  }
  render() {
    console.log('props', this.props);
    return (
      <h1>
        This is about page
      </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
}

export default connect(mapStateToProps)(About)
