import TagCheckBoxView from "../views/tagCheckBoxView";
import { SongTags } from '../constants/songTags';
import { checkedTags } from "../handler/tagClickHandler";

function TagCheckBox($container) {
  this.$container = $container;
  this.render = () => {
    this.$container.innerHTML = SongTags.map(({ tag, id }) => TagCheckBoxView({ tag, id })).join(""); // join은 map 함수 실행시 자동적으로 추가되는 쉼표를 제거하는 역할. 아마도 map이 배열을 반환해서 요소 구분용으로 자동 삽입되는 것 같다.
  };
  this.render();
};

export default TagCheckBox;