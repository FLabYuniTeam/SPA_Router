import App from './app';
import '../css/style.css';
import '../css/normalize.css';
import '../img/F-Lab_Logo.png';
import '../img/network.png';
import '../img/URI.png';
import '../img/coordinates.jpeg';
import '../img/drag-drop-icon.jpeg';
import '../img/JS_this.jpeg';
import '../img/jh_profile.jpeg';

window.addEventListener('DOMContentLoaded', () => {
  const $target = document.querySelector('.mainContainer-inner');
  new App($target);
});
