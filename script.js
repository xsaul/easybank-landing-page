const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  menu.style.display = "flex";
  close.style.display = "block";
  burger.style.display = "none";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  close.style.display = "none";
  burger.style.display = "block";
});
