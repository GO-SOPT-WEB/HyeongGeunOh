import { dragstart, drop } from "../handler/dndHandler";
import MyPageView from "../views/myPageView";

function MyPage($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = MyPageView();
        const calendarButton = document.querySelector("#calendarPage_button");
        const items = document.querySelectorAll(".item");
        calendarButton.addEventListener('click', () => {
            window.location.href = "http://localhost:5174/";
          });
        items.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                console.log(e.target.id);
                dragstart(e);
            });
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
            })
            item.addEventListener('drop', (e) => {
                console.log(e.target.id);
                drop(e);
            });
        })
    };
    this.render();
};

export default MyPage;