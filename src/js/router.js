import { routes } from "./constants/routeInfo.js";
import NotFound from "./pages/NotFound.js";

function Router($container) {
  this.$container = $container;

  const findMatchedRoute = () => {
    const matchedValue = routes.find((route) =>
      route.path.test(window.location.pathname)
    );
    console.log(matchedValue);
    return matchedValue;
  };

  const route = () => {
    const TargetPage = findMatchedRoute()?.element || NotFound;
    new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener("historychange", ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === window.location.pathname) {
        window.history.replaceState(null, "", to);
      } else {
        window.history.pushState(null, "", to);
      }

      route();
    });

    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
