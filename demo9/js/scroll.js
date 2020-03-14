const headerNav = document.getElementById("header-nav");

window.addEventListener("scroll", e => {
  const distance = window.scrollY;
  if (distance > 200) {
    if (!headerNav.classList.contains("sticky")) {
      headerNav.classList.add("sticky");
    }
  } else {
    headerNav.classList.remove("sticky");
  }
});
