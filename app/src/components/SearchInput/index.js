import React from 'react';

export default (props) => {
  return (
    <div className='input-group'>
      <input
        className='form-control'
        placeholder='Search users'
        onChange={props.searchValue}
      />
      {
        props.isError &&
        <div className='alert alert-danger'>
           Not Users
        </div>
      }
    </div>
  ); 
}
