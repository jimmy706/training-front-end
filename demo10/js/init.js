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
  new Swiper(".product-swiper-1", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      575: {
        slidesPerView: 5,
        spaceBetween: 5
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 5
      }
    }
  });
  new Swiper(".product-swiper-2", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  });
}

init();
