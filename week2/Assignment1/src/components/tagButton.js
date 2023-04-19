import checkedTagState from "../constants/songTags";
import TagButtonView from "../views/tagButtonView";

function TagButton($container) {
    this.$container = $container;
    const { checkedTags } = checkedTagState;
    
    this.render = () => {
        const toRenderTags = checkedTags.length === 0 ? [] : checkedTags;
        this.$container.innerHTML = toRenderTags.map(tag => TagButtonView({ tag })).join("");
    };
    this.render();
};

export default TagButton;