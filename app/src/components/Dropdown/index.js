import React from 'react';

export default props => {
  return (
    <div className='dropdown'>
      <button onClick={props.isContentDropdown}>
        {
          props.title
        }
      </button>
        {
          props.isOpenDropdown &&
          <div>
            THis is content dropdown
          </div>
        }
    </div>
  );
}