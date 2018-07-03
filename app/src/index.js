import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const users = [
  {
    name: 'Vasya',
    text: 'flkhsdlfsdlifusdoifuosidfuoisdufoisdf',
  },
  {
    name: 'Petya',
    text: 'flkhsdlfsdlifusdoifuosidfuoisdufoisdf',
  }
];

const App = (props) => {
  return (
    <div>
      {
        props.users ? props.users.map(item => {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.text}</p>
            </div>
          )
        }) : 'fsfsdfsdf'
      }
    </div>
  )
}

ReactDOM.render(<App users={users} color='red'  />, document.getElementById('root'));
registerServiceWorker();