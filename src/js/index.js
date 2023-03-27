import App from './app.js';
import '../css/style.css';
import '../css/normalize.css';
import '../img/F_Lab_Logo.png';
import '../img/network.png';
import '../img/URI.png';
import '../img/coordinates.jpeg';
import '../img/drag-drop-icon.jpeg';
import '../img/JS_this.jpeg';

window.addEventListener('DOMContentLoaded', () => {
  const $target = document.querySelector('.mainContainer');
  new App($target);
});
