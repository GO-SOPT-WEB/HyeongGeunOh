import todos, { todosOrder } from "../store/todos";
import CategoryView from "../views/categoryView";

function Category($container) {
    this.$container = $container;
    const CategoryInnerHTML = todosOrder.map(key => CategoryView({ categoryName: key, todoList: todos[key] })).join("");

    this.render = () => {
        this.$container.innerHTML = CategoryInnerHTML;
    };
    this.render();
};

export default Category;