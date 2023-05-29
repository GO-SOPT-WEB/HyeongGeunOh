import ReactDom from 'react-dom';

const ModalRenderer = ({ children }) => {
  return ReactDom.createPortal(children, document.querySelector('#modal'));
};

export default ModalRenderer;
