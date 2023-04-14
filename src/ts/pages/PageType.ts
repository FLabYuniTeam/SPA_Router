export abstract class PageElements {
	protected $container: Element;

	constructor($container: Element) {
		this.$container = $container;
	}

	protected abstract render(): void;
}

export type PageElement = new ($container: Element) => PageElements;
