import React from 'react';

export default props => {
  const user = props.user ? props.user : '';
  return (
    <React.Fragment>
      {
        props.isErrorUser ?
        <div className='alert alert-danger'>
           Выберите другого юзера
        </div> :
        <div className="activeUser">
          <div className='activeUser__image'>
            <img src={user.image} />
          </div>
          <p className='activeUser__text'>
            {user.name}
          </p>
          <p className='activeUser__text'>
            {user.age}
          </p>
          <p className='activeUser__text'>
            {user.phone}
          </p>
        </div>
      }
    </React.Fragment>
  );
}