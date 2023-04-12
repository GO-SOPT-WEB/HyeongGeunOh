import Category from "./category";
import TodayCounter from "./todayCounter"

export const renderTodayCounter = () => {
    new TodayCounter(document.querySelector("#todayCounter_wrapper"));
}

export const renderCategory = () => {
    new Category(document.querySelector("#todo"));
}