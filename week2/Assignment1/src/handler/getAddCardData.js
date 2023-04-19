import song from "../constants/song";
import SongCards from "../components/songCard";

const getData = () => {
    const title = localStorage.getItem('title');
    const tagList = localStorage.getItem('tagList');
    const imgURL = localStorage.getItem('imgURL');

    if (title === null) {
      return;
    }

    const tagListArray = tagList.split(",").map(x => x.trim());

    song.push({
      name: title,
      tagList: tagListArray,
      imgURL
    });
    new SongCards(document.querySelector("#card_section"));
    localStorage.clear();
  };

export default getData;