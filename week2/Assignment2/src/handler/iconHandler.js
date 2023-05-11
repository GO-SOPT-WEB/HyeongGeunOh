import { renderAddTodoModal } from "../components/renderFunction";
import heartClickHandler from "./heartClickHandler";

const iconHandler = (target) => {
    switch (target.innerText) {
        case "add_circle":
          renderAddTodoModal(target.dataset);
          break;
        case "favorite":
          heartClickHandler(target);
          break;
        default:
          return;
      }
}

export default iconHandler;