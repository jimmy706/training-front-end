var searchToggle = document.getElementById("search-toggle");
var searchWrapper = document.getElementById("search-wrapper");
var closeSearchBtn = searchWrapper.querySelector(".close-btn");
var header__nav = document.getElementById("header__nav");

function closeSearch() {
  searchWrapper.style.top = "100%";
  setTimeout(function() {
    searchWrapper.classList.remove("open");
  }, 300);
}

closeSearchBtn.addEventListener("click", function(e) {
  e.preventDefault();
  closeSearch();
});

searchToggle.addEventListener("click", function(e) {
  e.preventDefault();
  if (searchWrapper.classList.contains("open")) {
    closeSearch();
  } else {
    searchWrapper.classList.add("open");
    searchWrapper.style.top = "0";
  }
});
