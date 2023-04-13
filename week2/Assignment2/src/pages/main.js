import heartClickHandler from "../handler/heartClickHandler";
import { renderCategory, renderTodayCounter } from "./renderFunction";

function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    const todoSection = document.querySelector("#todo");
    renderTodayCounter();
    renderCategory();

    todoSection.addEventListener('click', ({ target }) => {
      heartClickHandler(target);
    })
  };
  this.render();
}
export default MainPage;