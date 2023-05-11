import MyPage from "../pages/myPage";
import todoState from "../store/todos";

const { changeTodos, todosOrder } = todoState;

const dragstart = ({ target }) => {
    localStorage.setItem("drag", target.id);
};

const drop = ({ target }) => {
    const dragItem = localStorage.getItem("drag");
    changeTodos(dragItem, target.id);
    localStorage.setItem('todosOrder', todosOrder);
    new MyPage(document.querySelector("#app"));
};

export const giveItemsDnDEvent = () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            dragstart(e);
        });
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        })
        item.addEventListener('drop', (e) => {
            drop(e);
        });
    })
}