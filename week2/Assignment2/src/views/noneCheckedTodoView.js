const NoneCheckedTodoView = ({ content }) => {
  return `
    <p>
        <span class="material-symbols-outlined" data-content="${content}">favorite</span>
        ${content}
    </p>
    `;
};

export default NoneCheckedTodoView;