import ReactDOM from 'react-dom';
import React from 'react';

import App from './Components/App.jsx';

function component() {
  const element = document.createElement('div');

  element.id = 'app';

  return element;
}

document.body.appendChild(component());
ReactDOM.render(<App />, document.getElementById('app'));