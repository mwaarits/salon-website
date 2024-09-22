// Fixed Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger & navMenu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Carousel
var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".multiple-slide-carousel .swiper-button-next",
    prevEl: ".multiple-slide-carousel .swiper-button-prev",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    990: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
