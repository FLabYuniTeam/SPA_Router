import App from "./app.js";

window.addEventListener("DOMContentLoaded", () => {
  const $target = document.querySelector(".mainContainer-inner");
  new App($target);
});
