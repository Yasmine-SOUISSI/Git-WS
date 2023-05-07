let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("show");
});

let products = [
  {
    id: 1,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "130",
    url: "./images/product-1.png",
    category: "Dresses",
  },
  {
    id: 2,
    title: "Armani Frok Ladies -  Imported Fork Blue",
    price: "210",
    url: "./images/product-2.png",
    category: "Dresses",
  },
  {
    id: 3,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "90",
    url: "./images/product-3.png",
    category: "Jewellery",
  },
  {
    id: 4,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "100",
    url: "./images/product-4.png",
    category: "Jewellery",
  },
  {
    id: 5,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "100",
    url: "./images/product-5.png",
    category: "Dresses",
  },
  {
    id: 6,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "50",
    url: "./images/product-6.png",
    category: "Accessories",
  },
  {
    id: 7,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "50",
    url: "./images/product-7.png",
    category: "Footwear",
  },
  {
    id: 8,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "300",
    url: "./images/product-8.png",
    category: "Footwear",
  },
  {
    id: 9,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "300",
    url: "./images/product-9.png",
    category: "Footwear",
  },
  {
    id: 10,
    title: "ROG Headphone - Model 25",
    price: "300",
    url: "./images/product-10.png",
    category: "Accessories",
  },
  {
    id: 11,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Blue",
    price: "700",
    url: "./images/product-11.png",
    category: "Accessories",
  },
  {
    id: 12,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "500",
    url: "./images/product-12.png",
    category: "Accessories",
  },
  {
    id: 13,
    title: "Nike Air Men’s Hoodie -  Imported Hoodie Red",
    price: "900",
    url: "./images/product-13.png",
    category: "Accessories",
  },
  {
    id: 14,
    title: "ROG Headphone - Model 25",
    price: "100",
    url: "./images/product-14.png",
    category: "Accessories",
  },
  {
    id: 15,
    title: "ROG Headphone - Model 25",
    price: "250",
    url: "./images/product-15.png",
    category: "Accessories",
  },
  {
    id: 16,
    title: "ROG Headphone - Model 25",
    price: "350",
    url: "./images/product-16.png",
    category: "Accessories",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  let productContainer = document.querySelector("#products");
  console.log(productContainer);
  for (let el of products) {
    let product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
    <div class="top d-flex">
      <img src=${el.url} alt=${el.title} />
      <div class="icon d-flex">
        <i class="bx bxs-heart"></i>
      </div>
    </div>
    <div class="bottom">
      <h4>${el.title}</h4>
      <div class="d-flex">
        <div class="price">${el.price}</div>
      </div>
    </div>
    `;
    productContainer.appendChild(product);
  }
});

let hello = document.querySelectorAll(".hello");
console.log(hello);
for (let el of hello) {
  console.log(el);
  el.addEventListener("click", () => {
    console.log("el", el);
    switch (el.style.color) {
      case "red":
        el.style.color = "black";
        break;
      case "black":
        el.style.color = "red";
        break;
      default:
        el.style.color = "red";
    }
  });
}
