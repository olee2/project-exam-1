//Handling the hamburger menu

const hamburger = document.querySelector(".ham");
const navsub = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navsub.classList.toggle("show");
});
