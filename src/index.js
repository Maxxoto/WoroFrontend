import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

// import * as serviceWorker from './serviceWorker';

// Materialize css import
import 'materialize-css/dist/css/materialize.min.css';
// Redux import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Redux thunk import
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
