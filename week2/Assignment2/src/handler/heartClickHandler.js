import { renderCategory, renderTodayCounter } from "../components/renderFunction";
import todoState from '../store/todos'

const heartClickHandler = ({ dataset }) => {
    const { changeCheckedTodos } = todoState;
    
    changeCheckedTodos(dataset);
    renderCategory();
    renderTodayCounter();
}

export default heartClickHandler;