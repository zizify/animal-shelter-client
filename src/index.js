import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
