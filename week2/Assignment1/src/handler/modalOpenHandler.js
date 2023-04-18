const modalOpenHandler = ({ id }) => {
  const name = id.split("_")[0];
  const buttonType = id.split("_")[1];
  if (buttonType === "modalOpenButton") {
    document.getElementById(`${name}_modal`).style.display = "flex";
  } else if (buttonType === "modalCloseButton") {
    document.getElementById(`${name}_modal`).style.display = "none";
  }
};

export default modalOpenHandler;