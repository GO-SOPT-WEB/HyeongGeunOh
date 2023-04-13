import { addTodos } from "../store/todos";
import AddTodoModalView from "../views/addTodoModalView";

function AddTodoModal($container, category) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = AddTodoModalView();
        document
        .querySelector("#addTodo_modal .input_wrapper button")
        .addEventListener("click", () => {
            addTodos({ category })
            document.querySelector("#addTodo_modal").style.display = "none";
        });
    };
    this.render();
};

export default AddTodoModal;