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