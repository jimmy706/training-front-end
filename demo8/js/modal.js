var modalToggles = Array.from(document.getElementsByClassName("modal-toggle"));

function closeModal(modalTarget) {
  var content = modalTarget.querySelector(".modal-content");
  content.classList.remove("on-open");
  setTimeout(function() {
    modalTarget.classList.remove("open");
  }, 300);
}

function openModal(modalTarget) {
  var content = modalTarget.querySelector(".modal-content");
  modalTarget.classList.add("open");
  content.classList.add("on-open");
}

modalToggles.forEach(toggle => {
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var modalTarget = document.querySelector(target);
      var closeBtn = modalTarget.querySelector(".close");
      openModal(modalTarget);
      if (closeBtn) {
        closeBtn.addEventListener("click", function() {
          closeModal(modalTarget);
        });
      }

      window.onclick = function(event) {
        if (event.target == modalTarget) {
          closeModal(modalTarget);
        }
      };
    }
  });
});
