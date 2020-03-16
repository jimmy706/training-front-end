const headerNav = document.getElementById("header-nav");
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", e => {
  const distance = window.scrollY;
  if (distance > 200) {
    if (!headerNav.classList.contains("sticky")) {
      headerNav.classList.add("sticky");
    }
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
    headerNav.classList.remove("sticky");
    topBtn.classList.remove("block");
  }
});

topBtn.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
