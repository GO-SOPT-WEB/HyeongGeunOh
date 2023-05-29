import { useLayoutEffect, useState } from "react";
import ReactDom from "react-dom";

const ModalRenderer = ({ children }: { children: React.ReactNode }) => {
  const [render, setRender] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    document.querySelector("#modal")
      ? setRender(document.querySelector("#modal") as HTMLDivElement)
      : console.log("no...");
  }, []);

  return render && ReactDom.createPortal(children, render);
};

export default ModalRenderer;
