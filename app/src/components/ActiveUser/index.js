import React from 'react';

export default props => {
  console.log('432', props.user);
  const user = props.user ? props.user : '';
  return (
    <div>
      <img src={user.image} />
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.phone}</p>
    </div>
  );
}