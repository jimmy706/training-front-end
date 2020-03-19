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
