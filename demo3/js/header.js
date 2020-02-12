var header = document.getElementById("header");
var logo = header.querySelector(".logo");
window.addEventListener("scroll", function(e) {
  if (window.scrollY > 50) {
    if (!header.classList.contains("sticky-header")) {
      header.classList.add("sticky-header");
      logo.setAttribute("src", "./images/medical_logo_1x_dark.png");
    }
  } else {
    header.classList.remove("sticky-header");
    logo.setAttribute("src", "./images/medical_logo_1x_light.png");
  }
});
