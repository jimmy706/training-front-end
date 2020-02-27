var sidebar = document.getElementById("sidebar");

var topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function() {
  var distance = window.scrollY;

  if (distance > 245) {
    var top = distance - 245;
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
    sidebar.style.top = `${top}px`;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      sidebar.style.top = `${top - 32}px`;
    }
  } else {
    sidebar.style.top = "0";
    topBtn.classList.remove("block");
  }
});
