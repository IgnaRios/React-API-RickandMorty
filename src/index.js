import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';
//import favoritesReducer from './Reducers/FavoritesReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//let store = createStore(favoritesReducer);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </ React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
