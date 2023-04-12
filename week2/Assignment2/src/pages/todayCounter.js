import todos from "../assets/todos";
import TodayCounterView from "../views/todayCounterView";

function TodayCounter($container) {
    this.$container = $container;

    this.render = () => {
        let task = 0;
        const keys = Object.keys(todos);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            task += todos[key].length;
        }
        this.$container.innerHTML = TodayCounterView({ task });
    };
    this.render();
};

export default TodayCounter;