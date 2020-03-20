const dropdownToogles = Array.from(
  document.getElementsByClassName("dropdown-toggle")
);
const dropdowns = Array.from(document.getElementsByClassName("dropdown-menu"));

dropdownToogles.forEach(toggle => {
  toggle.classList.add("on-close");
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var dropdownTarget = document.querySelector(target);
      var targetHeight = 0;
      if (!dropdownTarget.classList.contains("open")) {
        dropdownTarget.classList.add("open");
        dropdownTarget.style.height = 0;
        Array.from(dropdownTarget.children).forEach(function(node) {
          targetHeight += node.offsetHeight;
        });
        dropdownTarget.style.height = `${targetHeight}px`;
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

var modalToggles = Array.from(document.getElementsByClassName("modal-toggle"));

function closeModal(modalTarget) {
  var content = modalTarget.querySelector(".modal-content");
  content.classList.remove("on-open");
  setTimeout(function() {
    modalTarget.classList.remove("open");
  }, 300);
}

function openModal(modalTarget) {
  var content = modalTarget.querySelector(".modal-content");
  modalTarget.classList.add("open");
  content.classList.add("on-open");
}

modalToggles.forEach(toggle => {
  toggle.addEventListener("click", function() {
    var target = this.dataset["target"];
    if (target) {
      var modalTarget = document.querySelector(target);
      var closeBtn = modalTarget.querySelector(".close");
      openModal(modalTarget);
      if (closeBtn) {
        closeBtn.addEventListener("click", function() {
          closeModal(modalTarget);
        });
      }

      window.onclick = function(event) {
        if (event.target == modalTarget) {
          closeModal(modalTarget);
        }
      };
    }
  });
});
const productData = [
  {
    name: "Laptop Wifi CX61 2QF 15.6 4210M",
    tag: "Laptops",
    price: "2,299.00",
    image: "images/Laptop-300x300.jpg"
  },
  {
    name: "Ultra Wireless S50 Headphones with Wireless Bluetooth",
    tag: "Headphones",
    price: "35.00",
    image: "images/1-300x300.jpg"
  },
  {
    name: "Game Console Controller",
    tag: "Game Consoles",
    price: "90.00",
    image: "images/GamePad-300x300.jpg"
  },
  {
    name: "Smartphone 6S 32GB LTE",
    tag: "Smartphones",
    price: "1,100.00",
    image: "images/GoldPhone-300x300.jpg"
  },
  {
    name: "Universal Headphones Case in Black",
    tag: "Headphone Cases",
    price: "159.00",
    image: "images/headphone-case-300x300.jpg"
  },
  {
    name: "Game Console Destiny Special Edition",
    tag: "Gaming",
    price: "140.00",
    image: "images/GameStation-300x300.jpg"
  },
  {
    name: "Ultrbook UX350CA-FC050T",
    tag: "Smartphones",
    price: "1,200.00",
    image: "images/Smartphone4-300x300.jpg"
  },
  {
    name: "Smart Camera 6200U with 500GB SD card",
    tag: "Cameras",
    price: "2,999.00",
    image: "images/Photocamera-300x300.jpg"
  }
];

const productData2 = [
  {
    name: "Ultra Wireless S50 Headphones with Wireless Bluetooth",
    tag: "Headphones",
    price: "35.00",
    offPrice: "30.00",
    image: "images/1-300x300.jpg"
  },
  {
    name: "Ultrabook UX305CA-FC050T",
    tag: "Cameras",
    price: "2,999.00",
    offPrice: "3,199.00",
    image: "images/Ultrabooks-300x300.jpg"
  },
  {
    name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
    tag: "Computer Cases",
    price: "150.00",
    offPrice: "180.00",
    image: "images/DekstopPC-1-300x300.jpg"
  },
  {
    name: "Wireless Audio System Multiroom 360",
    tag: "Audios",
    price: "150.00",
    image: "images/WirelessSound-300x300.jpg"
  },
  {
    name: "Notebook Widescreen Y700-17 GF790",
    tag: "Laptops",
    price: "1,299.00",
    image: "images/Laptop4-300x300.jpg"
  },
  {
    name: "Headphones USB Wires",
    tag: "Headphones",
    price: "50.00",
    offPrice: "60.00",
    image: "images/headphone-usb-wires-300x300.jpg"
  },
  {
    name: "Universal Headphones Case in Black",
    tag: "Headphone Cases",
    price: "159.00",
    image: "images/headphone-case-300x300.jpg"
  },
  {
    name: "Smartphone 6S 32GB LTE",
    tag: "Smartphones",
    price: "1,100.00",
    image: "images/GoldPhone-300x300.jpg"
  }
];

function createCard(productItem) {
  const { name, price, tag, image } = productItem;
  const card = `
            <div class="swiper-slide">
                <div class="card-product">
                      <div class="product-container">
                        <a href="javascript:void(0)" class="tag">${tag}</a>
                        <div href="javascript:void(0)" class="product-content">
                          <h4 class="product-title">
                            <a href="javascript:void(0)">${name}</a>
                          </h4>
                          <a href="javascript:void(0)" class="img-wrapper">
                            <img src="${image}" class="product-img"/>
                          </a>
                          <div class="action-wrap">
                            <div class="price-wrap">
                              <span class="price">£${price}</span>
                              <a href="javascript:void(0)" class="cart-btn tooltip">
                                <i class="pe-7s-cart"></i>
                                <span class="tooltip-text">Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="hover-wrap">
                        <a href="javascript:void(0)" class="wishlist">Whishlist</a>
                        <a href="javascript:void(0)" class="compare">Compare</a>
                      </div>
                    </div>
                  </div>
                  `;
  return card;
}

function createCard2(productItem) {
  const { name, price, tag, image, offPrice } = productItem;
  const card = `
                <div class="card-product">
                      <div class="product-container">
                        <a href="javascript:void(0)" class="tag">${tag}</a>
                        <div href="javascript:void(0)" class="product-content">
                          <h4 class="product-title">
                            <a href="javascript:void(0)">${name}</a>
                          </h4>
                          <a href="javascript:void(0)" class="img-wrapper">
                            <img src="${image}" class="product-img"/>
                          </a>
                          <div class="action-wrap">
                            <div class="price-wrap">
                              <span class="price">${
                                offPrice
                                  ? "<ins>£" +
                                    price +
                                    "</ins><del>£" +
                                    offPrice +
                                    "</del>"
                                  : "£" + price
                              }</span>
                              <a href="javascript:void(0)" class="cart-btn tooltip">
                                <i class="pe-7s-cart"></i>
                                <span class="tooltip-text">Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="hover-wrap">
                        <a href="javascript:void(0)" class="wishlist">Whishlist</a>
                        <a href="javascript:void(0)" class="compare">Compare</a>
                      </div>
                    </div>
                  `;
  return card;
}

const productSwipers = $(".product-swiper");
const productGrids = $(".products-grid");

function renderProduct() {
  productSwipers.each(function() {
    const swiperWrappr = this.querySelector(".swiper-wrapper");
    swiperWrappr.innerHTML = productData.map(p => createCard(p)).join("");
  });
}

productGrids.each(function() {
  this.innerHTML = productData2.map(p => createCard2(p)).join("");
});

renderProduct();
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
        renderProduct();
        initProductSwiper();
      }
    });
  });
});
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", e => {
  const distance = window.scrollY;
  if (distance > 100) {
    if (!topBtn.classList.contains("block")) {
      topBtn.classList.add("block");
    }
  } else {
    topBtn.classList.remove("block");
  }
});

topBtn.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
let endDate = new Date().getTime() + 28800 * 1000;
let now = new Date().getTime();
let timeleft = endDate - now;
let hourLeft = document.getElementById("hour-count");
let minLeft = document.getElementById("min-count");
let secLeft = document.getElementById("sec-count");

setInterval(function() {
  now = new Date().getTime();
  timeleft = endDate - now;
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  hourLeft.innerText = hours < 10 ? `0${hours}` : hours;
  minLeft.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secLeft.innerText = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

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
