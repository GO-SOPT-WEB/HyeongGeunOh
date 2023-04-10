import SongCard from "./pages/songCard";
import TagCheckBox from "./pages/tagCheckBox";

const typeWrapper = document.querySelector("#type_wrapper");
const cardSection = document.querySelector("#card_section");

const render = () => {
    new TagCheckBox(typeWrapper);
    new SongCard(cardSection);
};

window.addEventListener("DOMContentLoaded", () => {
    render();
});

