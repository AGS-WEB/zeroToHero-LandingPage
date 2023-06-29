const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

// Verifica se navToggle existe, se sim cria o escutador
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
};

// Verifica se navClose existe, se sim cria o escutador
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
};

// Esconde o navMenu caso clique em algum link ou fora do menu
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

// Cartõeszinhos do sobre
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

// Ação contents show/hide
const skillsContent = document.getElementsByClassName("acao__item"),
  skillsHeader = document.querySelectorAll(".acao__item-head");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "acao__item item__close";
  }
  if (itemClass === "acao__item item__close") {
    this.parentNode.className = "acao__item item__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
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
const testemunhosSwiper = new Swiper('.testemunhos__cards', {
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

sr.reveal(`.sobre__data`, {origin: "bottom"})

sr.reveal(`.acao__head`)
sr.reveal(`.acao__bottom, .acao__button`, {origin: "bottom"})

sr.reveal(`.testemunhos__data`, {origin: "left"})
sr.reveal(`.testemunhos__cards`, {origin: "right"})