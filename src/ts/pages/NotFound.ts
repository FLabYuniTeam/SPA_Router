class NotFound {
  $container: Element;
  constructor($container: Element) {
    this.$container = $container;
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
