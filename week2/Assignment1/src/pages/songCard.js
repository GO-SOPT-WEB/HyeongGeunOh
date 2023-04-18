import SongCardView from "../views/songCardView";
import song from "../constants/song";
import checkedTagState from "../constants/songTags";


function SongCards($container) {
    this.$container = $container;
    const { checkedTags } = checkedTagState;

    this.render = () => {
        const checkedSongs = (checkedTags.includes('전체') || checkedTags.length === 0) ? song : song.filter(({ tagList }) => checkedTags.includes(tagList[0]));
        this.$container.innerHTML = checkedSongs.map(({ name, tagList, imgURL }) => SongCardView({ name, tagList, imgURL })).join("");
    }
    this.render();
};

export default SongCards;