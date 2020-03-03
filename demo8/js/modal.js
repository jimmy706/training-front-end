var modalToggles = Array.from(document.getElementsByClassName("modal-toggle"));

modalToggles.forEach(toggle => {
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var modalTarget = document.querySelector(target);
      var closeBtn = modalTarget.querySelector(".close");
      modalTarget.classList.add("open");

      closeBtn.addEventListener("click", function() {
        modalTarget.classList.remove("open");
      });

      window.onclick = function(event) {
        if (event.target == modalTarget) {
          modalTarget.classList.remove("open");
        }
      };
    }
  });
});
