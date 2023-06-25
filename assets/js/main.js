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

const menuHiddenFunction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}

navLinks.forEach(link => {
  link.addEventListener("click", menuHiddenFunction)
});