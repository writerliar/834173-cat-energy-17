var mainNav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__button");

mainNav.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainNav.classList.contains("navigation--closed")) {
    mainNav.classList.remove("navigation--closed");
    mainNav.classList.add("navigation--opened");
  } else {
    mainNav.classList.remove("navigation--opened");
    mainNav.classList.add("navigation--closed");
  }
});
