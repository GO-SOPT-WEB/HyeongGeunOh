export const checkedTags = []

export const tagClickHandler = ({ checked, id }) => {
    if (checked) {
        checkedTags.push(id)
    } else {
        const idx = checkedTags.indexOf(id)
        if (idx > -1) checkedTags.splice(idx, 1)
    }
};

export const tagButtonClickHandler = ({ innerText }) => {
    const idx = checkedTags.indexOf(innerText)
    if (idx > -1) checkedTags.splice(idx, 1)
};