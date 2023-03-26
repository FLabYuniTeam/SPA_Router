import '../css/style.css';
import '../css/normalize.css';
import App from './app.js';
import '../images/F-Lab_Logo.png';
import '../images/JS_this.jpeg';
import '../images/URI.png';
import '../images/coordinates.jpeg';
import '../images/drag-drop-icon.jpeg';
import '../images/jh_profile.jpeg';
import '../images/network.png';

window.addEventListener('DOMContentLoaded', () => {
  const $target = document.querySelector('.mainContainer-inner');
  new App($target);
});
