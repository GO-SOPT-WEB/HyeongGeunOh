import { checkedTodos } from "../handler/heartClickHandler";
import CheckedTodoView from "./checkedTodoView";
import NoneCheckedTodoView from "./noneCheckedTodoView";

const CategoryView = ({ categoryName, todoList }) => {
  const todos = todoList.map(content =>
    checkedTodos.includes(content) ? CheckedTodoView({ content }) : NoneCheckedTodoView({ content })
  ).join("");
  return `
    <article>
    <h1 class=${categoryName}>
      ${categoryName}
      <span class="material-symbols-outlined">add_circle</span>
    </h1>
    <div class="todos_wrapper">
      ${todos}
    </div>
  </article>
    `;
};

export default CategoryView;