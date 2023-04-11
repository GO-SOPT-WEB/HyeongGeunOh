import addCardSubmitHandler from "../handler/addCardSubmitHandler";
import fileLoadHandler from "../handler/fileLoadHandler";
import AddCardView from "../views/addCardView";

function AddCardPage($container) {
  this.$container = $container;
  this.render = () => {
    this.$container.innerHTML = AddCardView();
    const imgInput = document.querySelector("form .input_wrapper #imgURL");
    const form = document.querySelector("form");

    imgInput.onchange = () => fileLoadHandler(imgInput);
    form.addEventListener('submit', () => {
      addCardSubmitHandler(form);
    });
  };
  this.render();
};

export default AddCardPage;