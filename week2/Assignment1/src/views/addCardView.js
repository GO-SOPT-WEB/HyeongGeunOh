const AddCardView = () => {
 return `
    <section id="addCard_wrapper">
        <h1>음악을 추가해주세요!</h1>
        <form method="get" enctype="multipart/form-data" action="/">
            <div class="input_wrapper">
                <label for="title">제목</label>
                <input type="text" id="title" name="title" autofocus />
            </div>
            <div class="input_wrapper">
                <label for="tagList">해시태그(,로 구분)</label>
                <input type="text" id="tagList" name="tagList" />
            </div>
            <div class="input_wrapper">
                <label for="imgURL">앨범 커버</label>
                <input type="file" id="imgURL" name="imgURL" accept="image/*" />
            </div>
            <input type="submit" id="submit" name="submit" />
        </form>
    </section>
 `   
};

export default AddCardView;