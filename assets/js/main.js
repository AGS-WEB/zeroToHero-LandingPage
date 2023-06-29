// NavMenu toggle/close
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

// Check if navToggle exists, if so create the eventListener
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
};

// Check if navClose exists, if so create the eventListener
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
};

// Hide navMenu when click on link
const navLinks = document.querySelectorAll(".nav__link, .nav__link-button"),
  main = document.querySelector("main")

const menuHideFunction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}

navLinks.forEach(link => {
  link.addEventListener("click", menuHideFunction)
});

main.addEventListener("click", menuHideFunction)

// Cards 'about' show/hide
const contentViews = document.querySelectorAll(".content__more"),
  contentBtns = document.querySelectorAll(".content__button"),
  contentClose = document.querySelectorAll(".content__more-icon"),
  contentChild = document.querySelectorAll(".content__more-data")

let modal = function (modalClick) {
  contentViews[modalClick].classList.add("active-modal");
};

contentBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modal(i);
  });
});

contentClose.forEach((close) => {
  close.addEventListener("click", () => {
    contentViews.forEach((content) => {
      content.classList.remove("active-modal");
    });
  });
});

contentViews.forEach(content => {
  content.addEventListener("click", (e) => {
    content.classList.remove("active-modal")
  })
});

contentChild.forEach(child => {
  child.addEventListener("click", (e) => {
    e.stopPropagation()
  })
});

// Ação description show/hide
const actionItem = document.getElementsByClassName("action__item"),
  actionItemText = document.querySelectorAll(".action__item-head");

function toggleactionDescription() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < actionItem.length; i++) {
    actionItem[i].className = "action__item item__close";
  }
  if (itemClass === "action__item item__close") {
    this.parentNode.className = "action__item item__open";
  }
}

actionItemText.forEach((element) => {
  element.addEventListener("click", toggleactionDescription);
});

// Scroll Header Background Show/Hide
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is higher than 80 viewport height, add a one box-shadow to the your header
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Swiper 
const testimonialsSwiper = new Swiper('.testimonials__cards', {
  // Optional parameters
  slidesPerView: "auto",
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up")
  this.scrollY >= 300 
    ? scrollUp.classList.add("show-scroll") 
    : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)

// Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})

sr.reveal(`.home__container`)
sr.reveal(`.home-extends__data`, {origin: "left"})
sr.reveal(`.home-extends__banner`, {origin: "bottom"})

sr.reveal(`.about__data`, {origin: "bottom"})

sr.reveal(`.action__head`)
sr.reveal(`.action__bottom, .action__button`, {origin: "bottom"})

sr.reveal(`.testimonials__data`, {origin: "left"})
sr.reveal(`.testimonials__cards`, {origin: "right"})