export const LO_FI = "Lo-Fi 🎧";
export const BAND = "Band 🥁";
export const POP = "Pop 🎵";
export const LO_FI_ID = "Lo-Fi";
export const BAND_ID = "Band";
export const POP_ID = "Pop";

export const SongTags = [
  {
    tag: "전체",
    id: "전체",
  },
  {
    tag: LO_FI,
    id: LO_FI_ID,
  },
  {
    tag: BAND,
    id: BAND_ID,
  },
  {
    tag: POP,
    id: POP_ID,
  },
];

const checkedTags = [];

const changeCheckedTags = (checked, id) => {
  if (checked) {
    checkedTags.push(id);
  } else {
    const idx = checkedTags.indexOf(id);
    if (idx > -1) checkedTags.splice(idx, 1);
  }
};

const deleteCheckedTag = (innerText) => {
  const idx = checkedTags.indexOf(innerText);
  if (idx > -1) checkedTags.splice(idx, 1);
};

const checkedTagState = {
  checkedTags,
  changeCheckedTags,
  deleteCheckedTag,
};

export default checkedTagState;
