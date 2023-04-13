import { renderCategory, renderTodayCounter } from "../pages/renderFunction";

export const checkedTodos = ['웹팟 첫 세미나', '웹팟 첫 뒤풀이'];

const heartClickHandler = ({ dataset }) => {
    if (checkedTodos.includes(dataset.content)) {
        const idx = checkedTodos.indexOf(dataset.content)
        if (idx > -1) checkedTodos.splice(idx, 1)
    } else {
        checkedTodos.push(dataset.content);
    }
    renderCategory();
    renderTodayCounter();
}

export default heartClickHandler;