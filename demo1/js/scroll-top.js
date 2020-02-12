document.querySelector(".scroll-up-btn").addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
