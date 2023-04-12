const NoneCheckedTodoView = ({ content }) => {
  return `
    <p>
        <span class="material-symbols-outlined">favorite</span>
        ${content}
    </p>
    `;
};

export default NoneCheckedTodoView;