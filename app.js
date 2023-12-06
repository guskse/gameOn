"use strict";

//Navbar Functionality Toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarTogglerBtn = document.querySelector("[data-nav-toggler]");

navbarTogglerBtn.addEventListener("click", () => {
  navbarTogglerBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

//If navbar item clicked, close the navbar
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", () => {
    navbar.classList.remove("active");
    navbarTogglerBtn.classList.remove("active");
  });
}

//Searchbar Functionality Toggle
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}

//Fixed Header and BackTop Button Functionality
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
