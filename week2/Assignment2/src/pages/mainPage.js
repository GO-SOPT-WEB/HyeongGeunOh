import { BASE_URL } from "../components/router";
import iconHandler from "../handler/iconHandler";
import { renderMainPage } from "../components/renderFunction";

function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    renderMainPage();
    const todoSection = document.querySelector("#todo");
    const myButton = document.querySelector("#myPage_button");
    const calendarButton = document.querySelector("#calendarPage_button");
    todoSection.addEventListener("click", ({ target }) => {
      iconHandler(target);
    });
    myButton.addEventListener("click", () => {
      window.location.href = "/mycategory";
    });
    calendarButton.addEventListener("click", () => {
      window.location.href = BASE_URL;
    });
  };
  this.render();
}

export default MainPage;
