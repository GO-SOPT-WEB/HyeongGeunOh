const fileLoadHandler = ({ files }) => {
    const file = files[0];
    const container = document.querySelector("#addCard_wrapper form #submit");
    const newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);  
    container.before(newImage);
};

export default fileLoadHandler;