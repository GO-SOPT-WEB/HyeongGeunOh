const CheckedTodoView = ({ content }) => {
    return `
      <p>
          <span class="material-symbols-outlined" style="color: #ef9776;" data-content="${content}">favorite</span>
          ${content}
      </p>
      `;
  };
  
  export default CheckedTodoView;