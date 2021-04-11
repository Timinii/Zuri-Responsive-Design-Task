const btnTog = document.querySelector(".toggler");
const naviDir = document.querySelector("ul.nav-links");

btnTog.addEventListener("click", () => {
  naviDir.classList.toggle("show");
});
