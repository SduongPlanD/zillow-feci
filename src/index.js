import './style.scss';
import Dog from './dog.jpg';

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');
  element.innerHTML = 'Hello webpack';

  const myDog = new Image();
  myDog.src = Dog;
  element.appendChild(myDog);

  return element;
}

document.body.appendChild(component());