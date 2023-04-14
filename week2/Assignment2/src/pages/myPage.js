import MyPageView from "../views/myPageView";

function MyPage($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = MyPageView();
        const calendarButton = document.querySelector("#calendarPage_button");
        calendarButton.addEventListener('click', () => {
            window.location.href = "http://localhost:5174/";
          })
    };
    this.render();
};

export default MyPage;