import AddTodoModal from "./addTodoModal";
import Category from "./category";
import TodayCounter from "./todayCounter"

export const renderTodayCounter = () => {
    new TodayCounter(document.querySelector("#todayCounter_wrapper"));
};

export const renderCategory = () => {
    new Category(document.querySelector("#todo"));
};

export const renderAddTodoModal = ({ category }) => {
    new AddTodoModal(document.querySelector("#app"), category);
};