var headerLinks = Array.from(document.querySelectorAll("#header a.nav-link"));
var sections = Array.from(document.getElementsByClassName("page-section"));
var topBtn = document.getElementById("top-btn");
var headerHeight = document.getElementById("header").offsetHeight;

headerLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var target = link.getAttribute("href").replace("#", "");
    sections.forEach(function(s) {
      var top = s.offsetTop;
      if (target === s.getAttribute("id")) {
        window.scroll({
          top: top - headerHeight,
          behavior: "smooth"
        });
      }
    });
  });
});

window.addEventListener("scroll", function(e) {
  var distance = window.scrollY;
  if (distance > 60) {
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
    topBtn.classList.remove("block");
  }
  sections.forEach(function(s) {
    var top = s.offsetTop;
    var bottom = top + s.offsetHeight;
    if (top < distance + headerHeight && distance + headerHeight < bottom) {
      var id = s.getAttribute("id");
      headerLinks.forEach(function(link) {
        var target = link.getAttribute("href").replace("#", "");
        if (target === id) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
