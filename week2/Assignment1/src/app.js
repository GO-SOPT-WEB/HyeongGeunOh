import MainPage from "./pages/mainPage.js";
import AddCardPage from "./pages/addCardPage.js";

export const BASE_URL = "https://geun-oh.github.io/geunoh.github.io/week2/assign1/";
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