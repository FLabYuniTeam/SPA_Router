import navigate from './utils/navigate.js';
import Router from './router.js';
import { BASE_URL } from './constants/routeInfo.js';

class App {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.$container.addEventListener('click', (e) => {
      const $target = e.target.closest('a');
      if (!($target instanceof HTMLAnchorElement)) return;
      e.preventDefault();
      const targetURL = $target.href.replace(BASE_URL, '');
      navigate(targetURL);
    });
    new Router(this.$container);
  }
}

export default App;
