const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", e => {
  const distance = window.scrollY;
  if (distance > 100) {
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
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
