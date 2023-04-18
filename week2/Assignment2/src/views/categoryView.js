const CategoryView = ({ categoryName, mappedTodos }) => {
  return `
    <article>
    <h1 class=${categoryName}>
      ${categoryName}
      <span class="material-symbols-outlined" data-category=${categoryName}>add_circle</span>
    </h1>
    <div class="todos_wrapper">
      ${mappedTodos}
    </div>
  </article>
    `;
};

export default CategoryView;