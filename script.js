const sideNav = document.querySelector(".sidenav");
M.sideNav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});