import TagCheckBoxView from "../views/tagCheckBoxView";
import { SongTags } from '../constants/songTags';

function TagCheckBox($container) {
  this.$container = $container;
  this.render = () => {
    this.$container.innerHTML = SongTags.map((tag) => TagCheckBoxView({ tag }));
  };
  this.render();
}

export default TagCheckBox;