const CheckedTodoView = ({ content }) => {
    return `
      <p>
          <span class="material-symbols-outlined" style="color: #ef9776;">favorite</span>
          ${content}
      </p>
      `;
  };
  
  export default CheckedTodoView;