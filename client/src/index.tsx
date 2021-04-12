import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { UserContext } from './Context/UserContext';
import './index.css';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <UserContext>
      <App />
    </UserContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);