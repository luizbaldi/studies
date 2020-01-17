import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux */
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = combineReducers(reducers)

ReactDOM.render(
  <Provider store={createStore(store)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
