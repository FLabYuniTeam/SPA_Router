import { PageElements } from '../pages/PageType';

class NotFound extends PageElements {
	constructor($container: Element) {
		super($container);
		this.render();
	}

	render() {
		this.$container.innerHTML = `
      <main class="notFoundPage">
        404 NOT FOUND
      </main>
    `;
	}
}

export default NotFound;
