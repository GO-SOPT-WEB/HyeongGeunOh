import { renderSongCards, renderTagButton, renderTagCheckBox } from "../components/renderFunction";
import checkedTagState from "../constants/songTags";

export const tagClickHandler = ({ checked, id }) => {
    const { changeCheckedTags } = checkedTagState;

    if (checked === undefined) return;
    changeCheckedTags(checked, id);

    renderTagCheckBox();
    renderSongCards();
    renderTagButton();
};

export const tagButtonClickHandler = ({ innerText }) => {
    const { deleteCheckedTag } = checkedTagState;

    deleteCheckedTag(innerText);

    renderTagCheckBox();
    renderSongCards();
    renderTagButton();
};