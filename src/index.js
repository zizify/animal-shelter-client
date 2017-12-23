import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, 
    document.getElementById('root'));
registerServiceWorker();
