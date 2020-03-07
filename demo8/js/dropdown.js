var dropdownToogles = Array.from(
  document.getElementsByClassName("dropdown-toogle")
);
var dropdowns = Array.from(document.getElementsByClassName("dropdown-menu"));

dropdownToogles.forEach(toggle => {
  toggle.classList.add("on-close");
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var dropdownTarget = document.querySelector(target);
      var targetHeight = 0;
      if (!dropdownTarget.classList.contains("open")) {
        dropdownTarget.classList.add("open");
        dropdownTarget.style.height = 0;
        Array.from(dropdownTarget.children).forEach(function(node) {
          targetHeight += node.offsetHeight;
        });
        dropdownTarget.style.height = `${targetHeight}px`;
        this.classList.add("on-open");
      } else {
        this.classList.remove("on-open");
        this.classList.add("on-close");
        dropdownTarget.style.height = 0;
        setTimeout(function() {
          dropdownTarget.classList.remove("open");
        }, 500);
      }
    }
  });
});
