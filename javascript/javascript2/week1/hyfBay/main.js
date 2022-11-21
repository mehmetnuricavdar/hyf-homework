console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const productList = document.createElement("ul");
  document.querySelector("main").appendChild(productList);
  products.forEach((element) => {
    const productListItems = document.createElement("li");
    productList.appendChild(productListItems);
    productListItems.innerHTML = `<h2>${element.name}</h2>
        <p> Price: ${element.price}</p>
        <p> Rating: ${element.rating}</p>
        `;
  });
}

renderProducts(products); // This should create the ul and the li's with the individual products details
