import todoState from "../store/todos";
import CategoryView from "../views/categoryView";
import CheckedTodoView from "../views/checkedTodoView";
import NoneCheckedTodoView from "../views/noneCheckedTodoView";

function Category($container) {
    this.$container = $container;
    const { todos, todosOrder, checkedTodos } = todoState;
    const mappedTodos = (key) => todos[key].map(content =>
        checkedTodos.includes(content) ? CheckedTodoView({ content }) : NoneCheckedTodoView({ content })
      ).join("");
    const CategoryInnerHTML = todosOrder.map(key => CategoryView({ categoryName: key, mappedTodos: mappedTodos(key) })).join("");

    this.render = () => {
        this.$container.innerHTML = CategoryInnerHTML;
    };
    this.render();
};

export default Category;