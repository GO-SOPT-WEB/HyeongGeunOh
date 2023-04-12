import { renderCategory, renderTodayCounter } from "./renderFunction";

function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    renderTodayCounter();
    renderCategory();
  };
  this.render();
}
export default MainPage;