import MyPage from "../pages/myPage";
import todoState from "../store/todos";

const { changeTodos, todosOrder } = todoState;

export const dragstart = ({ target }) => {
    localStorage.setItem("drag", target.id);
};

export const drop = ({ target }) => {
    const dragItem = localStorage.getItem("drag");
    changeTodos(dragItem, target.id);
    localStorage.setItem('todosOrder', todosOrder);
    new MyPage(document.querySelector("#app"));
};

