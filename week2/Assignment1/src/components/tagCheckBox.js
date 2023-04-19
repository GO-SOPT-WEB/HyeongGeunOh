import checkedTagState, { SongTags } from '../constants/songTags';
import CheckedTagBoxView from '../views/checkedTagBoxView';
import NoneCheckedTagBoxView from '../views/noneCheckedTagBoxView';

function TagCheckBox($container) {
  this.$container = $container;
  const { checkedTags } = checkedTagState;

  this.render = () => {
    this.$container.innerHTML = SongTags.map(({ tag, id }) => checkedTags.includes(id) ? CheckedTagBoxView({ tag, id }) : NoneCheckedTagBoxView({ tag, id })).join(""); // join은 map 함수 실행시 자동적으로 추가되는 쉼표를 제거하는 역할. 아마도 map이 배열을 반환해서 요소 구분용으로 자동 삽입되는 것 같다.
  };
  this.render();
};

export default TagCheckBox;