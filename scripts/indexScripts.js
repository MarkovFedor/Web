function loadItems() {
  var items = [];
  console.log(localStorage.getItem("allItems"));
  if(localStorage.getItem("allItems") != null) {
    items = JSON.parse(localStorage.getItem("allItems"));
  }
    console.log(items)
    var itemsWrapper = document.getElementById("products-id");

    for(element of items) {
        itemsWrapper.innerHTML += `
        <div class="product-card" onclick="addToCart(this)">
        <div class="product-image">
          <img src="`+element.images+`">
        </div>
        <div class="product-info">
          <h5 onclick="addToCart(this)">`+element.name+`</h5>
          <h6>`+element.price+`</h6>
        </div>
      </div>
        `;
    }
}

function addToCart(element) {
    if(element == undefined) return;
    const children = element.childNodes;
    const innerChildren = children[3].childNodes;
    const productName = innerChildren[1].innerText;
    const price = innerChildren[3].innerText;
    var cart = [];
    if(localStorage.hasOwnProperty("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if(cart.find(item => item.name == productName)) {
        alert("Товар уже в корзине");
        return;
    }

    cart.push({
        name: productName,
        price: price,
    });
    console.log("Работает")
    localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = function() {
    loadItems();
    addToCart();
}