import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/style/index.css';
import Home from './containers/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();