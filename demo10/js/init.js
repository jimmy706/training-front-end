function init() {
  new Swiper("#main-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  initProductSwiper();
}

function initProductSwiper() {
  new Swiper(".product-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      575: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 0
      }
    }
  });
}

init();
