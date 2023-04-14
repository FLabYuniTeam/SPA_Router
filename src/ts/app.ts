import navigate from './utils/navigate';
import Router from './router';
import { BASE_URL } from './constants/routeInfo';

class App {
	$container: Element;

	constructor($container: Element) {
		this.$container = $container;
		this.$container.addEventListener('click', (e: Event) => {
			const eventTarget = e.target as HTMLElement;
			const $target = eventTarget.closest('a');
			if (!($target instanceof HTMLAnchorElement)) return;
			e.preventDefault();
			const targetURL = $target.href.replace(BASE_URL, '');
			navigate(targetURL);
		});

		new Router($container);
	}
}

export default App;
