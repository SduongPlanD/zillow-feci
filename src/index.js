import ReactDOM from 'react-dom';
import React from 'react';

import App from './Components/App.jsx';

const component = (type, id) => {
  const element = document.createElement(type);
  element.id = id;
  return element
}

const script = () => {
  const element = document.createElement('script');
  element.src = "https://kit.fontawesome.com/2db4db150c.js"
  return element;
}

document.head.appendChild(script());
document.body.appendChild(component('div', 'app'));
document.body.appendChild(component('div', 'modal-root'));

ReactDOM.render(<App />, document.getElementById('app'));