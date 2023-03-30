import { routes } from './constants/routeInfo.js';
import NotFound from './pages/NotFound.js';

class Router {
  constructor($container) {
    this.$container = $container;
    this.init();
    this.route();
  }

  route() {
    function findMatchedRoute() {
      const matchedValue = routes.find((route) => route.path.test(window.location.pathname));
      return matchedValue;
    }
    const TargetPage = findMatchedRoute()?.element || NotFound;
    new TargetPage(this.$container);
  }

  init() {
    window.addEventListener('historychange', ({ detail }) => {
      const { to, isReplace } = detail;
      if (isReplace || to === window.location.pathname) {
        window.history.replaceState(null, '', to);
      } else {
        window.history.pushState(null, '', to);
      }
      this.route();
    });
    window.addEventListener('popstate', () => {
      this.route();
    });
  }
}

export default Router;
