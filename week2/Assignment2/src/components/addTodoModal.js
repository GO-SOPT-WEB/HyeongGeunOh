import todoState from "../store/todos";
import AddTodoModalView from "../views/addTodoModalView";

function AddTodoModal($container, category) {
    this.$container = $container;
    const { addTodos } = todoState;

    this.render = () => {
        this.$container.innerHTML = AddTodoModalView();
        const addTodoModal = document.querySelector("#addTodo_modal");
        document.querySelector("#addTodo_modal .input_wrapper button")
        .addEventListener("click", () => {
            addTodos(category)
            addTodoModal.style.display = "none";
        });
        addTodoModal.addEventListener('click', ({ target }) => {
            if (target === addTodoModal) {
                addTodoModal.style.display = "none";
            }
        })
    };
    this.render();
};

export default AddTodoModal;