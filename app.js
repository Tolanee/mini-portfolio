const burger = document.querySelector("#clicked");
const navLinks = document.querySelector(".main-nav-link");


burger.addEventListener("click", ()=> {
  navLinks.classList.toggle("open");
});

var thisButton = document.getElementById("myBtn");
thisButton.addEventListener("click", goToTop)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    thisButton.style.display = "block";
  } else {
    thisButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}