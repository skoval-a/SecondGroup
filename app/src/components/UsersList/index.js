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
      <nav>
        <ul className='pagination'>
         <li className='page-item'>
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.handlePagitaion(-1)
            }}>
              Prev
            </a>
          </li>
          <li className='page-item'>
            <a
              className="page-link"
              href="#">
              {props.currentPage + 1}
            </a>
          </li>
          <li className='page-item'>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.handlePagitaion(1)
              }}>
                Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}