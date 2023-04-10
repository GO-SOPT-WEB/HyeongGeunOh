import TagBoxView from "./tagBoxView";

const SongCardView = ({ name, tagList, imgURL }) => {
    const TagBox = tagList.map((tag) => TagBoxView({ tag })).join("");

    return `
    <article>
    <h2>${name}</h2>
    <div class="tag_wrapper">
        ${TagBox}
    </div>
    <img src=${imgURL} alt="Cover image of blue" />
    <span class="material-symbols-outlined">favorite</span>
  </article>
    `
};

export default SongCardView;