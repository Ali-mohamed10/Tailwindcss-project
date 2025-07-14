let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelectorAll(".links li");

toggleMenu.addEventListener("click", function () {
  document.querySelector(".links").classList.toggle("ul-open");
  links.forEach((li) => {
    li.classList.toggle("open");
  });
});
function checkWidth() {
  if (window.innerWidth < 768) {
    document.querySelector(".links").classList.remove("ul-open");
    links.forEach((li) => {
      li.classList.remove("open");
    });
  }
}
checkWidth();
window.addEventListener("resize", checkWidth);
