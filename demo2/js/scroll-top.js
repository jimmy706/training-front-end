var btn = document.getElementById("to-top-btn");

btn.addEventListener("click", function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
