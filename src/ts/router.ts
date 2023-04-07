import { routes } from './constants/routeInfo';
import NotFound from './pages/NotFound';

class Router {
  $container: Element;

  constructor($container: Element) {
    this.$container = $container;
    window.addEventListener('historychange', ({ detail }: any) => {
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

    this.route();
  }

  findMatchedRoute() {
    const matchedValue = routes.find(
      (route) => route.path === window.location.pathname
    );

    return matchedValue;
  }

  route() {
    const TargetPage = this.findMatchedRoute()?.element || NotFound;
    new TargetPage(this.$container);
  }
}

export default Router;
