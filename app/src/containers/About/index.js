import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
    };
    this.setState({
      name: '',
    })
    this.props.createContact(contact);
  }

  handleChange = (e) =>{
    this.setState({
      name: e.target.value,
    });
  }

  listView = (contact, index) => {
   return (
    <div className='row' key={index}>
      <div className='col-xs-10'>
        <p className="contact-name">
          {contact.name}
        </p>
      </div>
      <div className='col-xs-2'>
        <button
          className='btn btn-danger'
        >
          Remove
        </button>
      </div>
    </div>
   ); 
  }

  render() {
    const {
      name,
    } = this.state;
    console.log('this.props',this.props);
    return (
     <div className='about'>
      <div className='about__header'>
        <h1>
          About Page
        </h1>
      </div>
      <div className='about-content'>
        <div className='wrapForm'>
          <div className='wrapForm__header'>
            <h3>
              Add contact form
            </h3>
          </div>
          <form className='form' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                value={name}
                placeholder='Add contact'
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
            <button
              type='submit'
              className='btn btn-success'
            >
            <i className='fa fa-user-plus'></i>
              Add Contact
            </button>
          </form>
          {
            this.props.contacts.length > 0 && this.props.contacts.map((contact, i) =>
             this.listView(contact, i)) ||
             <div className="alert alert-danger">Not Contacts</div>
          }
        </div>
      </div>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => console.log(index)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(About)
