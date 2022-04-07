import './style.css';
import ArrowIcon from '../public/assets/arrow.svg';
import mockData from './mockData.json';
import { TTT } from './thisss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent = mockData.name;
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  
  const myIcon = new Image();
  myIcon.src = ArrowIcon;
  
  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
