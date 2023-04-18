import TagBoxView from "./tagBoxView";

const SongCardView = ({ name, tagList, imgURL }) => {
  const TagBox = tagList.map((tag) => TagBoxView({ tag })).join("");

  return `
    <article style="animation: fadein .5s">
    <h2>${name}</h2>
    <div class="tag_modalButton_wrapper">
    <div class="tag_wrapper">
    ${TagBox}
</div>
<span class="material-symbols-outlined" id="${name}_modalOpenButton">Add</span>
    </div>
    <img src=${imgURL} alt="Cover image of ${name}" />
    <span class="material-symbols-outlined">favorite</span>
    <div class="songCard_modal_wrapper" id="${name}_modal">
      ${TagBox}
      <span class="material-symbols-outlined" id="${name}_modalCloseButton">close</span>
</div>
  </article>
    `;
};

export default SongCardView;
