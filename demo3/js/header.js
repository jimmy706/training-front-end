var header = document.getElementById("header");
var logo = header.querySelector(".logo");
var dropdowns = Array.from(header.getElementsByClassName("dropdown-menu"));
window.addEventListener("scroll", function(e) {
  if (window.innerWidth > 1060) {
    if (window.scrollY > 50) {
      if (!header.classList.contains("sticky-header")) {
        header.classList.add("sticky-header");
        logo.setAttribute("src", "./images/medical_logo_1x_dark.png");
      }
    } else {
      header.classList.remove("sticky-header");
      logo.setAttribute("src", "./images/medical_logo_1x_light.png");
    }
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 1060) {
    header.classList.remove("sticky-header");
    logo.setAttribute("src", "./images/medical_logo_1x_light.png");
  } else {
    dropdowns.forEach(function(dw) {
      dw.classList.remove("open");
    });
  }
});
