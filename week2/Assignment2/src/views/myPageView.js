import todoState from "../store/todos";

const MyPageView = () => {
    const { todosOrder } = todoState;
    const categories = todosOrder.map(key => `<div class="item" id=${key} draggable="true" droppable="true">${key}</div>`).join("");

    return `
    <header>
    <h1>WEB TO DO MATE</h1>
  </header>
  <section id="myPage_wrapper">
    <h3>나의 카테고리</h3>
    <div class="category_wrapper">
        ${categories}
    </div>
  </section>
  <footer class="myPage">
  <article id="calendarPage_button">
    <span class="material-symbols-outlined today">home</span>
    달력
  </article>
  <article id="myPage_button">
    <span class="material-symbols-outlined">account_circle</span>
    MY
  </article>
</footer>
    `
};

export default MyPageView;