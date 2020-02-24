var header = document.getElementById("header");
var topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function(e) {
  var distance = window.scrollY;
  if (distance > 60) {
    if (!header.classList.contains("sticky") && window.innerWidth > 1090) {
      header.classList.add("sticky");
    }
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
    header.classList.remove("sticky");
    topBtn.classList.remove("block");
  }
});
