// TODO: Init swiper

new Swiper("#main-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

//TODO: TABS

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

// TODO: Header search
const searchToggle = $("#search-toggle");

searchToggle.click(function() {
  const target = $(this.dataset["target"]);
  if (!target.hasClass("active")) {
    target.addClass("active");
    searchToggle.addClass("on-open");
  } else {
    target.removeClass("active");
    searchToggle.removeClass("on-open");
  }
});

// TODO: PRODUCTS
const productsData1 = [
  {
    name: "Lorem Ipsum",
    price: "200.00",
    offPrice: "250.00",
    image: "images/1-300x300.jpg"
  },
  {
    name: "Adipiscing tristique",
    price: "150.00",
    offPrice: "200.00",
    image: "images/2-300x300.jpg"
  },
  {
    name: "Tortor posuere",
    price: "250.00",
    image: "images/4-300x300.jpg"
  },
  {
    name: "Nisl vel pretium",
    price: "300.00",
    image: "images/15-300x300.jpg"
  },
  {
    name: "Dictum sit",
    image: "images/6-300x300.jpg",
    offPrice: "250.00",
    price: "220.00"
  }
];

function createCard(product) {
  const { name, price, offPrice, image } = product;
  const card = `
    <div class="product-card">
      <div class="product-header">
        <a href="javascript:void(0)" class="img-wrapper">
          <img src="${image}" alt="flower" class="porudct-img" />
        </a>
        <div class="overlay">
          <a href="javascript:void(0)" class="quickview-btn" title="Quickview"
            ><i class="fas fa-eye"></i
          ></a>
          <a href="javascript:void(0)" class="addcart-btn" title="Add to cart">ADD TO CART</a>
          <a href="javascript:void(0)" class="whishlist-btn" title="Add to wishlist"
            ><i class="fas fa-heart"></i
          ></a>
        </div>
      </div>
      <div class="product-content">
        <h4 class="product-name">
          <a href="javascript:void(0)">${name}</a>
        </h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="price-wrap">
          ${
            offPrice
              ? "<del>$" + offPrice + "</del><strong>$" + price + "</strong>"
              : "<strong>$" + price + "</strong>"
          }
        </div>
      </div>
    </div>
  `;
  return card;
}

for (let i = 1; i <= 4; i++) {
  const tabItem = document.getElementById("top-item-" + i);
  tabItem.innerHTML = productsData1.map(p => createCard(p)).join("");
}

const productSwipers = $(".product-swiper");
productSwipers.each(function() {
  const swiperWrappr = this.querySelector(".swiper-wrapper");
  swiperWrappr.innerHTML = productsData1
    .map(p => `<div class="swiper-slide">${createCard(p)}</div>`)
    .join("");
});

new Swiper(".product-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  loop: true
});
