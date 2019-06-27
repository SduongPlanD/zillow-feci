import './style.scss';
import Dog from './dog.jpg';
import Hen from './hen.svg';

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');
  element.innerHTML = 'Hello webpack';

  const myDog = new Image();
  myDog.src = Dog;
  element.appendChild(myDog);

  // const myHen = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  // element.appendChild(myHen);
  const myHen = new Image();
  myHen.src = Hen;
  element.appendChild(myHen);

  return element;
}

document.body.appendChild(component());