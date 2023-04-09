import { routes } from './constants/routeInfo';
import NotFound from './pages/NotFound';
import { CustomData } from './utils/navigate';

class Router {
  $container: Element;

  constructor($container: Element) {
    this.$container = $container;
    window.addEventListener('historychange', ((e: CustomEvent<CustomData>) => {
      const { to, isReplace } = e.detail;

      if (isReplace || to === window.location.pathname) {
        window.history.replaceState(null, '', to);
      } else {
        window.history.pushState(null, '', to);
      }

      this.route();
    }) as EventListener);

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
