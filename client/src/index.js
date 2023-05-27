// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\index.js
import './sass/main.scss'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import {}

import App from './components/App'
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // 1st arg-reducers(=> fn returning an array),2nd Arg-initial state(empty object), 3rd- applyMiddleware

const rootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <Provider store={store}>
    
    <App />
    
  </Provider>
);