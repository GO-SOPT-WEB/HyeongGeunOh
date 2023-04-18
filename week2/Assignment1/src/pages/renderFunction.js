import MainStatic from "./mainStatic";
import SongCards from "./songCard";
import TagButton from "./tagButton";
import TagCheckBox from "./tagCheckBox";

export const renderTagCheckBox = () => {
    new TagCheckBox(document.querySelector("#type_wrapper"));
};
export const renderSongCards = () => {
    new SongCards(document.querySelector("#card_section"));
};
export const renderTagButton = () => {
    new TagButton(document.querySelector("#tag_button"));
};
export const renderMainStatic = () => {
    new MainStatic(document.querySelector("#app"));
}