var sidebar = document.getElementById("sidebar");
var topBtn = document.getElementById("top-btn");
var lastedScroll = window.scrollY;

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function() {
  var distance = window.scrollY;
  var isScrollDown = distance - lastedScroll > 0 ? true : false;
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
        (window.innerHeight > 600 ? 32 : 200)}px`;
    }
  } else {
    sidebar.style.top = "0";
    topBtn.classList.remove("block");
  }
  lastedScroll = distance;
});
