const AddTodoModalView = () => {
    return `
        <section id="addTodo_modal">
            <div class="input_wrapper">
                <input type="text" id="inputContent" name="inputContent" placeholder="항목을 추가해주세요!" autofocus/>
                <button>추가</button> 
            </div>
        </section>
    `;
};

export default AddTodoModalView;