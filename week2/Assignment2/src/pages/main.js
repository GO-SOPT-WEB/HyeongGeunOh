import heartClickHandler from "../handler/heartClickHandler";
import {
  renderAddTodoModal,
  renderMainPage,
} from "./renderFunction";

function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    renderMainPage();
    const todoSection = document.querySelector("#todo");
    const myButton = document.querySelector("#myPage_button");
    const calendarButton = document.querySelector("#calendarPage_button");
    console.log(calendarButton)
    todoSection.addEventListener("click", ({ target }) => {
      switch (target.innerText) {
        case "add_circle":
          renderAddTodoModal(target.dataset);
          break;
        case "favorite":
          heartClickHandler(target);
          break;
        default:
          return;
      }
    });
    myButton.addEventListener('click', () => {
      window.location.href = "/mycategory";
    });
    calendarButton.addEventListener('click', () => {
      window.location.href = "http://localhost:5174/";
    })
  };
  this.render();
}
export default MainPage;
