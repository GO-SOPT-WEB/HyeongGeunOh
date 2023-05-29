import ReactDom from "react-dom";

const ModalRenderer = ({ children }: { children: React.ReactNode }) => {
  return ReactDom.createPortal(
    children,
    document.querySelector("#modal") as HTMLDivElement
  );
};

export default ModalRenderer;
