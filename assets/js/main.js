/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*================ CHANGE BACKGROUND HEADER ==================*/
function scrollHeader() {
  const header = document.getElementById("header");
  const scrollup = document.getElementById("scrollup");
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
    scrollup.classList.add("show-scroll");
  } else {
    header.classList.remove("scroll-header");
    scrollup.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollHeader);

/* ====================== SCROLL REVEAL ANIMATIONS ================ */
const sr = ScrollReveal({
  distance: "60px",
  durataion: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".home__header, .section__title", { delay: 600 });
sr.reveal(".home__footer", { delay: 700 });
sr.reveal(".home__img", { delay: 900, origin: "top" });

sr.reveal(
  ".sponser__img, .products__card, .footer__logo, .footer__content, .footer__copy",
  { origin: "top", interval: 100 }
);

sr.reveal(".specs__data, .discount__animate", {
  origin: "left",
  interval: 100,
});
sr.reveal(".specs__img, .discount__img", { origin: "right" });

sr.reveal(".case__img", { origin: "top" });
sr.reveal(".case__data");
