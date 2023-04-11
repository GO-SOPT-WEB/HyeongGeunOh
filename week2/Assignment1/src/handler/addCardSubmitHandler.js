const addCardSubmitHandler = ({ title, tagList }) => {
    const imgInput = document.querySelector("form .img");
    if (imgInput === null) {
        console.log('put your img!');
        return;
    }
    const imgURL = imgInput.src;

    localStorage.setItem('title', title.value);
    localStorage.setItem('tagList', tagList.value);
    localStorage.setItem('imgURL', imgURL);
};

export default addCardSubmitHandler;