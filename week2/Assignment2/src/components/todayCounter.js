import todoState from "../store/todos";
import TodayCounterView from "../views/todayCounterView";

function TodayCounter($container) {
    this.$container = $container;
    const { todos, keys, checkedTodos } = todoState;

    this.render = () => {
        let task = 0;
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            task += todos[key].length;
        }
        task -= checkedTodos.length;
        this.$container.innerHTML = TodayCounterView({ task });
    };
    this.render();
};

export default TodayCounter;