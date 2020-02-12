const openBtn = document.getElementById("toggle-nav-btn");
const closeBtn = document.getElementById("close-nav-btn");
const mbNav = document.getElementById("mb-nav");
openBtn.addEventListener("click", function() {
  mbNav.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", function() {
  mbNav.style.transform = "translateX(-100%)";
});
