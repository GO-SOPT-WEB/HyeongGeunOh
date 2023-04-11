import {
  tagButtonClickHandler,
  tagClickHandler,
} from "../handler/tagClickHandler";
import modalOpenHandler from "../handler/modalOpenHandler";
import {
  renderTagCheckBox,
  renderSongCards,
  renderTagButton,
} from "./renderFunction";
import getData from "../handler/getAddCardData";

function MainPage($container) {
  this.$container = $container;
  this.render = () => {
    const typeWrapper = document.querySelector("#type_wrapper");
    const tagButton = document.querySelector("#tag_button");
    const cardSection = document.querySelector("#card_section");
    renderTagCheckBox();
    renderSongCards();
    renderTagButton();

    typeWrapper.addEventListener("click", ({ target }) => {
      tagClickHandler(target);
    });
    tagButton.addEventListener("click", ({ target }) => {
      tagButtonClickHandler(target);
    });
    cardSection.addEventListener("click", ({ target }) => {
      modalOpenHandler(target);
    });
    getData();
  };
  this.render();
}

export default MainPage;
