import MainPage from "./pages/main.js";
import AddCardPage from "./pages/addCard.js";

const BASE_URL = "http://localhost:5173";
const ROUTE_LIST = [{ path: "/", element: MainPage }, { path: "/addCard", element: AddCardPage }];

function App($container) {
  this.$container = $container;
  let currentPage = undefined;

  const init = () => {
    const findMatchedRoute = () =>
      ROUTE_LIST.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      const TargetPage = findMatchedRoute()?.element;
      currentPage = new TargetPage(this.$container);
    };

    route();
  };
  init();
}
export default App;