import React from 'react';
import ItemUser from '../ItemUser';

export default props => {
  return (
    <div className='usersList'>
      <div className="usersList__head">
        <div className='avatar'>
          <p>Avatar:</p>
        </div>
        <div>
          <p>Name:</p>
        </div>
        <div>
          <p>Age:</p>
        </div>
        <div>
          <p>Phone:</p>
        </div>
      </div>
      {
        props.data && props.data.map((item, id) =>
        <ItemUser
          key={id}
          updateApp={props.updateApp}
          {...item}
        />)
      }
    </div>
  );
}