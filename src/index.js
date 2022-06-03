import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { apiSlice } from './features/api/apiSlice';
import store from './store';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import 'animate.css';

const result = store.dispatch(apiSlice.endpoints.getUser.initiate()); 
// to unsubscribe from the catche later 
// result.unsubscribe()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

