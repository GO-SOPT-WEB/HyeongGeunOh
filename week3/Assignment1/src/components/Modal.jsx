import ReactDom from 'react-dom';

const Modal = ({ children }) => {
  return ReactDom.createPortal(children, document.querySelector('#modal'));
};

export default Modal;
