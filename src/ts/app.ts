import navigate from './utils/navigate';
import Router from './router';
import { BASE_URL } from './constants/routeInfo';

function App($container) {
  this.$container = $container;

  const init = () => {
    this.$container.addEventListener('click', (e) => {
      const $target = e.target.closest('a');
      if (!($target instanceof HTMLAnchorElement)) return;
      e.preventDefault();
      const targetURL = $target.href.replace(BASE_URL, '');
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
