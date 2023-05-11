import MainPage from "../pages/mainPage";
import MyPage from "../pages/myPage";

export const BASE_URL = "http://localhost:5174/";
const ROUTE_LIST = [
  { path: "/", element: MainPage },
  { path: "/mycategory", element: MyPage },
];

function Router($container) {
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
};

export default Router;
