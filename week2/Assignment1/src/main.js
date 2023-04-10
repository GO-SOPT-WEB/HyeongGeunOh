import SongCards from "./pages/songCard";
import TagCheckBox from "./pages/tagCheckBox";

export const checkedTags = []
const typeWrapper = document.querySelector("#type_wrapper");
const cardSection = document.querySelector("#card_section");

const render = () => {
    new TagCheckBox(typeWrapper);
    new SongCards(cardSection);
};

window.addEventListener("DOMContentLoaded", () => {
    render();
    typeWrapper.addEventListener('click', ({ target }) => {
        if (target.checked) {
            checkedTags.push(target.id)
        } else {
            const idx = checkedTags.indexOf(target.id)
            if (idx > -1) checkedTags.splice(idx, 1)
        }
        console.log(checkedTags);
        new SongCards(cardSection);
    })
});

