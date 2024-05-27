let sideBar = document.querySelector("aside");
let asideButton = document.querySelector("header .side-button");
let esc = document.querySelector("aside .esc");

asideButton.addEventListener("click", () => {
    sideBar.style.display = "flex";
    sideBar.style.zIndex = "1";
})
esc.addEventListener("click", () => {
    sideBar.style.display = "none";
    sideBar.style.zIndex = "-1";
})