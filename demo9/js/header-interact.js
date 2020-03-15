const searchToggle = document.getElementById("search-toggle");
const cartToggle = document.getElementById("cart-toggle");

searchToggle.addEventListener("click", e => {
  e.preventDefault();
  const searchForm = document.querySelector("#header-search-form");
  if (!searchForm.classList.contains("on-open")) {
    searchToggle.classList.add("open");
    searchForm.classList.add("on-open");
  } else {
    searchToggle.classList.remove("open");
    searchForm.classList.remove("on-open");
  }
});

cartToggle.addEventListener("click", e => {
  e.preventDefault();
  if (!cartToggle.classList.contains("open")) {
    cartToggle.classList.add("open");
  } else {
    if (e.target === cartToggle) {
      cartToggle.classList.remove("open");
    }
  }
});
