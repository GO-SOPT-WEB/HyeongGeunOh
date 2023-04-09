import TagCheckBox from "./pages/tagCheckBox";

const typeWrapper = document.querySelector("#type_wrapper");
const render = () => {
    new TagCheckBox(typeWrapper);
};

window.addEventListener("DOMContentLoaded", () => {
    render();
});

