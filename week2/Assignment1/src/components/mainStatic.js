import MainStaticView from "../views/mainStaticView";

function MainStatic($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = MainStaticView();
    };
    this.render();
};

export default MainStatic;