import AddTodoModal from "./addTodoModal";
import Category from "./category";
import MainStatic from "./mainStatic";
import TodayCounter from "./todayCounter"

export const renderStaticView = () => {
    new MainStatic(document.querySelector("#app"));
}

export const renderTodayCounter = () => {
    new TodayCounter(document.querySelector("#todayCounter_wrapper"));
};

export const renderCategory = () => {
    new Category(document.querySelector("#todo"));
};

export const renderMainPage = () => {
    renderStaticView();
    renderTodayCounter();
    renderCategory();
};

export const renderAddTodoModal = ({ category }) => {
    new AddTodoModal(document.querySelector("#modal_wrapper"), category);
};