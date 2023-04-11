const fileLoadHandler = ({ files }) => {
    console.log(files);
    const file = files[0];
    const container = document.querySelector("#addCard_wrapper form");
    const newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);  
    container.appendChild(newImage);
};

export default fileLoadHandler;