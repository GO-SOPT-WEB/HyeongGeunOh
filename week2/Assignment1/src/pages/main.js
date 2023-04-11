import SongCards from "./songCard";
import TagCheckBox from "./tagCheckBox";
import {
  tagButtonClickHandler,
  tagClickHandler,
} from "../handler/tagClickHandler";
import TagButton from "./tagButton";
import song from '../constants/song';

function MainPage($container) {
  this.$container = $container;
  this.render = () => {
    const typeWrapper = document.querySelector("#type_wrapper");
    const cardSection = document.querySelector("#card_section");
    const tagButton = document.querySelector("#tag_button");

    new TagCheckBox(typeWrapper);
    new SongCards(cardSection);
    new TagButton(tagButton);
  
    typeWrapper.addEventListener("click", ({ target }) => {
      tagClickHandler(target);
      new SongCards(cardSection);
      new TagButton(tagButton);
    });
    tagButton.addEventListener("click", ({ target }) => {
      tagButtonClickHandler(target);
      new TagCheckBox(typeWrapper);
      new SongCards(cardSection);
      new TagButton(tagButton);
    });
    cardSection.addEventListener("click", ({ target }) => {
      const name = target.id.split("_")[0];
      const buttonType = target.id.split("_")[1];
      if (buttonType === "modalOpenButton") {
        document.getElementById(`${name}_modal`).style.display = "flex";
      } else if (buttonType === "modalCloseButton") {
        document.getElementById(`${name}_modal`).style.display = "none";
      }
    });
    const getData = () => {
      const title = localStorage.getItem('title');
      const tagList = localStorage.getItem('tagList');
      const imgURL = localStorage.getItem('imgURL');
      if (title === null) {
        return;
      }
      console.log(title, tagList, imgURL);
      song.push({
        name: title,
        tagList: [tagList],
        imgURL
      });
      new SongCards(cardSection);
    };
    getData();
  };
  
  this.render();
};

export default MainPage;