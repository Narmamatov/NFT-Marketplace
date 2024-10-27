let opened = document.querySelector(".open");
let closed = document.querySelector(".close");
let nav = document.querySelector("nav");
opened.addEventListener("click", (e) => {
  nav.style.display = "flex";
  opened.style.display = "none";
  closed.style.display = "flex";
});
closed.addEventListener("click", (e) => {
  nav.style.display = "none";
  opened.style.display = "flex";
  closed.style.display = "none";
});
