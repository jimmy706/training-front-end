var dropdownToogles = Array.from(
  document.getElementsByClassName("dropdown-toogle")
);
var dropdowns = Array.from(header.getElementsByClassName("dropdown-menu"));

dropdownToogles.forEach(toggle => {
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var dropdownTarget = document.querySelector(target);
      if (!dropdownTarget.classList.contains("open")) {
        dropdownTarget.classList.add("open");
      } else {
        dropdownTarget.classList.remove("open");
      }
    }
  });
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 1060) {
    dropdowns.forEach(function(dw) {
      dw.classList.remove("open");
    });
  }
});
