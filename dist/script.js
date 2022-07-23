const nav = document.querySelector(".nav");
window.addEventListener("scroll", slidNav);

function slidNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}