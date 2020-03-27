// TODO: TABS
const tabsContainers = [...document.getElementsByClassName("tabs-container")];

tabsContainers.forEach(container => {
  const tabLinks = [...container.getElementsByClassName("nav-item ")];
  const tabs = [...container.getElementsByClassName("tab")];
  tabLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("href");
      const tabTarget = container.querySelector(target);
      if (tabTarget) {
        tabs.forEach(t => t.classList.remove("active"));
        tabTarget.classList.add("active");
        tabLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});

// TODO: Init swiper

new Swiper("#main-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

new Swiper(".product-swiper-1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1025: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});
