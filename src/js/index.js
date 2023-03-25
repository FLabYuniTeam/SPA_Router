import App from './app.js';
import '../css/style.css';
import '../css/normalize.css';
import '../css/images/F_Lab_Logo.png';
import '../css/images/network.png';
import '../css/images/URI.png';
import '../css/images/coordinates.jpeg';
import '../css/images/drag-drop-icon.jpeg';
import '../css/images/JS_this.jpeg';

window.addEventListener('DOMContentLoaded', () => {
  const $target = document.querySelector('.mainContainer');
  new App($target);
});
