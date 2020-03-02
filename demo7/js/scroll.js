var headerLinks = Array.from(document.querySelectorAll("#header .nav-link"));

var sections = Array.from(document.getElementsByClassName("page-section"));
var topBtn = document.getElementById("top-btn");
var headerHeight = document.getElementById("header").offsetHeight;

function activeLink(id) {
  headerLinks.forEach(function(link) {
    var target = link.getAttribute("href").replace("#", "");
    if (target === id) {
      link.classList.add("active");
    }
  });
}

function removeActive(id) {
  headerLinks.forEach(function(link) {
    var target = link.getAttribute("href").replace("#", "");
    if (target === id) {
      link.classList.remove("active");
    }
  });
}

headerLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var target = link.getAttribute("href").replace("#", "");
    sections.forEach(function(s) {
      var id = s.getAttribute("id");
      if (target === id && id !== "home") {
        var top = s.offsetTop + headerHeight + 300;
        window.scroll({
          top: top,
          behavior: "smooth"
        });
      } else if (target === id && id === "home") {
        window.scroll({
          top: "0",
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
    var id = s.getAttribute("id");
    if (top < distance + headerHeight && distance + headerHeight < bottom) {
      activeLink(id);
    } else {
      removeActive(id);
    }
  });
});

topBtn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
