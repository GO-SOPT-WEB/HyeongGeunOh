import {
  tagButtonClickHandler,
  tagClickHandler,
} from "../handler/tagClickHandler";
import modalOpenHandler from "../handler/modalOpenHandler";
import {
  renderTagCheckBox,
  renderSongCards,
  renderTagButton,
  renderMainStatic,
} from "../components/renderFunction";
import getData from "../handler/getAddCardData";

function MainPage($container) {
  this.$container = $container;
  this.render = () => {
    renderMainStatic();
    
    const typeWrapper = document.querySelector("#type_wrapper");
    const tagButton = document.querySelector("#tag_button");
    const cardSection = document.querySelector("#card_section");
    const addNewGoodsButton = document.querySelector("#addNewGoods_button");
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
    addNewGoodsButton.addEventListener("click", () => {
      window.location.href = "/addCard";
    });
    getData();
  };
  this.render();
}

export default MainPage;
