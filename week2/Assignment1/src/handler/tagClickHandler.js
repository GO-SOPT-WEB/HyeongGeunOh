import { renderSongCards, renderTagButton, renderTagCheckBox } from "../pages/renderFunction";

export const checkedTags = []

export const tagClickHandler = ({ checked, id }) => {
    if (checked === undefined) return;
    if (checked) {
        checkedTags.push(id)
    } else {
        const idx = checkedTags.indexOf(id)
        if (idx > -1) checkedTags.splice(idx, 1)
    }
    renderTagCheckBox();
    renderSongCards();
    renderTagButton();
};

export const tagButtonClickHandler = ({ innerText }) => {
    const idx = checkedTags.indexOf(innerText);
    if (idx > -1) checkedTags.splice(idx, 1);
    renderTagCheckBox();
    renderSongCards();
    renderTagButton();
};