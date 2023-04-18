import { renderCategory, renderTodayCounter } from "../pages/renderFunction";

const todos = {
    "Hyeonggeun": ['베이킹 냠냠', '방정리'],
    "SOPT": ['웹팟 첫 세미나', '웹팟 첫 뒤풀이', '웹팟 워크샵'],
    "세종대": ['캡스톤 발표', 'UX/UI 디자인'],
    "운동": ['솝케팝 번개', '요가'],
};

const orginal = ["Hyeonggeun", "SOPT", "세종대", "운동"];
const local = localStorage.getItem("todosOrder");

export const todosOrder = local === null ? orginal : orginal !== local.split(",") ? local.split(",") : orginal;

export const addTodos = ({ category }) => {
    const modalInput = document.querySelector("#inputContent");
    const content = modalInput.value;
    if (todos[category].includes(content)) return;
    todos[category].push(content);
    renderCategory();
    renderTodayCounter();
    modalInput.value = null;
    document.querySelector("#addTodo_modal").style.display = "none";
};

export const changeTodos = (first, second) => {
    const idxF = todosOrder.indexOf(first);
    const idxS = todosOrder.indexOf(second);
    todosOrder[idxF] = second;
    todosOrder[idxS] = first; 
}

export default todos;