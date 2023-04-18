import { renderCategory, renderTodayCounter } from "../components/renderFunction";

const todos = {
    "Hyeonggeun": ['베이킹 냠냠', '방정리'],
    "SOPT": ['웹팟 첫 세미나', '웹팟 첫 뒤풀이', '웹팟 워크샵'],
    "세종대": ['캡스톤 발표', 'UX/UI 디자인'],
    "운동": ['솝케팝 번개', '요가'],
};
const checkedTodos = ['웹팟 첫 세미나', '웹팟 첫 뒤풀이'];
const keys = Object.keys(todos);
const local = localStorage.getItem("todosOrder");
const todosOrder = local === null ? keys : keys !== local.split(",") ? local.split(",") : keys;

const addTodos = (category) => {
    const modalInput = document.querySelector("#inputContent");
    const content = modalInput.value;
    if (todos[category].includes(content)) return;
    todos[category].push(content);
    renderCategory();
    renderTodayCounter();
    modalInput.value = null;
    document.querySelector("#addTodo_modal").style.display = "none";
};

const changeTodos = (first, second) => {
    const idxF = todosOrder.indexOf(first);
    const idxS = todosOrder.indexOf(second);
    todosOrder[idxF] = second;
    todosOrder[idxS] = first; 
};

const changeCheckedTodos = (dataset) => {
    if (checkedTodos.includes(dataset.content)) {
        const idx = checkedTodos.indexOf(dataset.content)
        if (idx > -1) checkedTodos.splice(idx, 1)
    } else {
        checkedTodos.push(dataset.content);
    }
};

const todoState = {
    todos,
    keys,
    checkedTodos,
    todosOrder,
    addTodos,
    changeTodos,
    changeCheckedTodos,
}

export default todoState;