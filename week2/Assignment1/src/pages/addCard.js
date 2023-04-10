import AddCardView from "../views/addCardView";

function AddCardPage($container) {
  this.$container = $container;
  this.render = () => {
    this.$container.innerHTML = AddCardView();
  };
  this.render();
};

export default AddCardPage;