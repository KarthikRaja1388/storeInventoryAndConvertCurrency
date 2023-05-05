class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products = [];

let btnAdd = document.querySelector(".product-add__btn");
let productList = document.querySelector(".product-list");
let btnConvertCurrency = document.querySelector(".btn-convert-currency");
let addContainer = document.querySelector(".add-product-container");
let convertContainer = document.querySelector(".convert-currency");

if (products.length === 0) {
  productList.innerHTML = `<tr class="empty-table-message">
        <td colspan="2">No items in the inventory</td>
      </tr>`;
}

btnAdd.addEventListener("click", () => {
  document.querySelector(".product-price").style.border = "none";

  let productName = document.querySelector(".product-name").value;
  let productPrice = document.querySelector(".product-price").value;

  if (productName !== "" && productPrice !== "") {
    if (!isNaN(parseInt(productPrice))) {
      const addedproduct = new Product(productName, productPrice);
      products.push(addedproduct);
      displayProductList(products);
      console.log(productName);
      productName = "";
    } else {
      document.querySelector(".product-price").style.border = "1px solid red";
    }
  }
});

function displayProductList(products) {
  productList.innerHTML = "";
  products.forEach((element) => {
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${element.name}</td>
      <td>${element.price}</td>`;
    productList.appendChild(row);
  });
}

btnConvertCurrency.addEventListener("click", () => {
  productList.innerHTML = "";

  let productCurrency = document.querySelector(".product-currency");
  products.map((element) => {
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${element.name}</td>
      <td>${element.price * 80}</td>`;
    productList.appendChild(row);
    productCurrency.textContent = "Price (INR)";
  });
  addContainer.style.display = "none";
  convertContainer.style.display = "none";
});
