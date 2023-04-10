import SongCards from "./pages/songCard";
import TagCheckBox from "./pages/tagCheckBox";
import { tagButtonClickHandler, tagClickHandler } from "./handler/tagClickHandler";
import TagButton from "./pages/tagButton";

const typeWrapper = document.querySelector("#type_wrapper");
const cardSection = document.querySelector("#card_section");
const tagButton = document.querySelector("#tag_button");

const render = () => {
    new TagCheckBox(typeWrapper);
    new SongCards(cardSection);
    new TagButton(tagButton);
};

window.addEventListener("DOMContentLoaded", () => {
    render();
    typeWrapper.addEventListener('click', ({ target }) => {
        tagClickHandler(target);
        new SongCards(cardSection);
        new TagButton(tagButton);
    });
    tagButton.addEventListener('click', ({ target }) => {
        tagButtonClickHandler(target);
        const clickedTagButton = typeWrapper.querySelector(`#${target.innerText}`);
        // clickedTagButton.setAttribute('checked', false);
        new TagCheckBox(typeWrapper);
        new SongCards(cardSection);
        new TagButton(tagButton);
    });
});