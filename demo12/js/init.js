// TODO: Scroll

const btnTop = $("#btn-top");
const header = $("#header");
window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  if (distance > 200) {
    if (!header.hasClass("sticky") && window.innerWidth > 1000) {
      header.addClass("sticky");
    }
    if (!btnTop.hasClass("block")) {
      btnTop.addClass("block");
    }
  } else {
    btnTop.removeClass("block");
    header.removeClass("sticky");
  }
});

btnTop.click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

// TODO: Dropdown

const dropdownToogles = Array.from(
  document.getElementsByClassName("dropdown-toggle")
);
const dropdowns = Array.from(document.getElementsByClassName("dropdown-menu"));

dropdownToogles.forEach(toggle => {
  toggle.classList.add("on-close");
  toggle.addEventListener("click", function() {
    let target = this.dataset["target"];
    if (target) {
      let dropdownTarget = document.querySelector(target);
      let targetHeight = 0;
      if (!dropdownTarget.classList.contains("open")) {
        dropdownTarget.classList.add("open");
        dropdownTarget.style.height = 0;
        Array.from(dropdownTarget.children).forEach(function(node) {
          targetHeight += node.offsetHeight;
        });
        dropdownTarget.style.height = `${targetHeight}px`;
        setTimeout(function() {
          dropdownTarget.style.height = "auto";
        }, 500);
        this.classList.add("on-open");
      } else {
        this.classList.remove("on-open");
        this.classList.add("on-close");
        dropdownTarget.style.height = 0;
        setTimeout(function() {
          dropdownTarget.classList.remove("open");
        }, 500);
      }
    }
  });
});

// TODO:  Init product
const products = [
  {
    name: "Cas Meque Metus",
    image: "images/sprite-yoga-straps1.jpg",
    offPrice: "100.00",
    price: "90.00"
  },
  {
    name: "Placerat in egestas",
    image: "images/wayfarer-messenger-bag.jpg",
    offPrice: "120.00",
    price: "90.00"
  },
  {
    name: "Amet nulla facilisi",
    image: "images/mushroom-burger.jpg",
    offPrice: "200.00",
    price: "150.00"
  },
  {
    name: "Mattis pellentesque",
    image: "images/impulse-duffle.jpg",
    price: "120.00"
  },
  {
    name: "Proin sagittis nisl",
    image: "images/3-500x500.jpg",
    price: "90.00"
  },
  {
    name: "Leo in vitae turpis",
    image: "images/8-500x500.jpg",
    offPrice: "200.00",
    price: "180.00"
  },
  {
    name: "Amet consectetur",
    image: "images/11-500x500.jpg",
    price: "100.00"
  },
  {
    name: "Lacinia at quis",
    image: "images/10-500x500.jpg",
    price: "120.00"
  },
  {
    name: "Ut aliquam purus",
    image: "images/6-500x500.jpg",
    price: "200.00"
  },
  {
    name: "Dapibus ultrices",
    image: "images/sprite-yoga-straps1.jpg",
    offPrice: "320.00",
    price: "300.00"
  }
];

function createCard(product) {
  const { name, image, offPrice, price } = product;
  const card = `
  <div class="card-product">
    <div class="card-header">
      <span class="badge">-45%</span>
      <a href="javascript:void(0)" class="tooltip whishlist-btn">
        <i class="far fa-heart"></i>
        <span class="tooltip-text left">
          Add to whishlist
        </span>
      </a>
      <a href="javascript:void(0)" class="img-wrapper">
        <img src="${image}"/>
      </a>
    </div>
    <div class="card-body">
      <a href="javascript:void(0)" class="product-name">${name}</a>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-alt"></i>
      </div>
      <div class="price-wrap">
      ${
        offPrice
          ? "<del>$" + offPrice + "</del><ins>$" + price + "</ins>"
          : "<ins>$" + price + "</ins>"
      }
      </div>
    </div>
    <div class="card-footer">
      <a href="javascript:void(0)" class="tooltip">
        <i class="fa fa-shopping-cart"></i>
        <span class="tooltip-text">Add to cart</span>
      </a>
      <a href="javascript:void(0)" class="tooltip">
        <i class="fa fa-sliders-h"></i>
        <span class="tooltip-text">Compare</span>
      </a>
      <a href="javascript:void(0)" class="tooltip">
        <i class="fa fa-external-link-alt"></i>
        <span class="tooltip-text">Quickview</span>
      </a>
    </div>
  </div>`;
  return card;
}

function createCard1(product) {
  const { name, price, offPrice, image } = product;
  const card = `
    <div class="card-product1">
      <a href="javascript:void(0)" class="img-wrapper">
        <img src="${image}"/>
      </a>
      <div class="product-content">
        <a href="javascript:void(0)" class="product-name">${name}</a>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <div class="price-wrap">
          ${
            offPrice
              ? "<del>$" + offPrice + "</del><ins>$" + price + "</ins>"
              : "<ins>$" + price + "</ins>"
          }
        </div>
      </div>
    </div>
  `;
  return card;
}

const productSwipers = $(".product-swiper");
productSwipers.each(function() {
  const swiperWrappr = this.querySelector(".swiper-wrapper");
  swiperWrappr.innerHTML = products
    .map(p => `<div class="swiper-slide">${createCard(p)}</div>`)
    .join("");
});

const productSwipers2 = $(".product-swiper-2");
productSwipers2.each(function() {
  const swiperWrappr = this.querySelector(".swiper-wrapper");
  swiperWrappr.innerHTML = products
    .map(
      p => `<div class="swiper-slide">${createCard(p) + createCard(p)}</div>`
    )
    .join("");
});

const mostview = $("#mostview-products");
mostview.html(products.map(p => createCard1(p)).join(""));

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
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  loop: true
});

new Swiper(".product-swiper-1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    750: {
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

new Swiper(".product-swiper-2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20
    }
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
    500: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 100
    }
  },
  loop: true
});
