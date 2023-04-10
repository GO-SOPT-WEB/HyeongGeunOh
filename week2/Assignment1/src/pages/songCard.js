import SongCardView from "../views/songCardView";
import song from "../constants/song";

function SongCard($container) {
    this.$container = $container;
    this.render = () => {
        this.$container.innerHTML = song.map(({ name, tagList, imgURL }) => SongCardView({ name, tagList, imgURL })).join("");
    }
    this.render();
};

export default SongCard;