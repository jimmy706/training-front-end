var dropdownToogles = Array.from(
  document.getElementsByClassName("dropdown-toogle")
);

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
