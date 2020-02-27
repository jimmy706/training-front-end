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
    var wHeight = window.innerHeight + window.scrollY;
    var bodyHeight = document.body.offsetHeight;
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
    sidebar.style.top = `${top}px`;
    if (wHeight >= bodyHeight) {
      sidebar.style.top = `${top -
        (wHeight - bodyHeight) -
        (window.innerHeight > 600 ? 32 : 80)}px`;
    }
  } else {
    sidebar.style.top = "0";
    topBtn.classList.remove("block");
  }
});
