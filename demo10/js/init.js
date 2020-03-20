function init() {
  new Swiper("#main-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 8000
    }
  });
  new Swiper("#swiper-partner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      427: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      1025: {
        slidesPerView: 5,
        spaceBetween: 100
      }
    },
    loop: true
  });
  initProductSwiper();
}

function initProductSwiper() {
  new Swiper(".product-swiper-1", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 5
      },
      900: {
        slidesPerView: 5,
        spaceBetween: 5
      },
      1026: {
        slidesPerView: 6,
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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
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
