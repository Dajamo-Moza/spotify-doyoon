import _ from 'lodash';
import './style.css';
import ArrowIcon from '../public/assets/arrow.svg';
import mockData from './mockData.json';
import yaml from './sample.yaml';

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent = mockData.name;
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = ArrowIcon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
