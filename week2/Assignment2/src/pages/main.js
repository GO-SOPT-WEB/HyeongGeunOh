import heartClickHandler from "../handler/heartClickHandler";
import { addTodos } from "../store/todos";
import {
  renderAddTodoModal,
  renderCategory,
  renderTodayCounter,
} from "./renderFunction";

function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    const todoSection = document.querySelector("#todo");
    renderTodayCounter();
    renderCategory();
    todoSection.addEventListener("click", ({ target }) => {
      switch (target.innerText) {
        case "add_circle":
          renderAddTodoModal(target.dataset);
          // document.querySelector("#addTodo_modal").style.display = "flex";
          break;
        case "favorite":
          heartClickHandler(target);
          break;
        default:
          return;
      }
    });
  };
  this.render();
}
export default MainPage;
