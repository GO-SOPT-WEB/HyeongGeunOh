const TodayCounterView = ({ task }) => {
    return `
    <span class="material-symbols-outlined today">
    favorite
    <span>${task}</span>
  </span>
    `;
};

export default TodayCounterView;