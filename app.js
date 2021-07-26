const burger = document.querySelector("#clicked");
const navLinks = document.querySelector(".main-nav-link");
const burgerHome = document.querySelector(".burger-home");


burger.addEventListener("click", ()=> {
  navLinks.classList.toggle("open");
});