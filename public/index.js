import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

const store = createStore(reducer);

ReactDOM.render(
  <App/>, document.getElementBy('app')
)
