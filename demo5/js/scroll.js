var header = document.getElementById("header");

window.addEventListener("scroll", function(e) {
  var distance = window.scrollY;
  if (distance > 40) {
    header.style.background = "rgba(12,12,13,0.86)";
  } else {
    header.style.background = "transparent";
  }
});
