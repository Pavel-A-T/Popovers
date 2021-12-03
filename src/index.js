import './css/style.css';
import { doPopup } from './js/app';

const button = document.getElementById("btn");
button.addEventListener('click', (ev => {
  ev.preventDefault();
  doPopup();
}))

