import { checkedTags } from "../handler/tagClickHandler";
import TagButtonView from "../views/tagButtonView";

function TagButton($container) {
    this.$container = $container;
    this.render = () => {
        const toRenderTags = checkedTags.length === 0 ? [] : checkedTags;
        this.$container.innerHTML = toRenderTags.map(tag => TagButtonView({ tag })).join("");
    };
    this.render();
};

export default TagButton;