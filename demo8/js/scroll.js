var topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function(e) {
  var distance = window.scrollY;
  if (distance > 100) {
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
    topBtn.classList.remove("block");
  }
});

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
