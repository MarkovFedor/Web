function store() {
    console.log("Hello world");
    var alldata = JSON.parse(localStorage.getItem("all-user-data"));
    if(!alldata) alldata = [];

    var items = document.getElementsByClassName('order-list-item');
    var cartElements = []
    for(const element of items) {
        console.log(element.getElementsByTagName("p")[1].textContent);
        const cartItem = {
            name: element.getElementsByTagName("p")[0].textContent,
            price: element.getElementsByTagName("p")[1].textContent,
        }
        cartElements.push(cartItem);
    }

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var cardNumber = document.getElementById('card-number').value;
    var cardDate = document.getElementById('card-date').value;
    var cardHolder = document.getElementById('card-holder').value;
    const userCardData = {
        cardNumber: cardNumber,
        cardDate: cardDate,
        cardHolder: cardHolder,
    }
    const userData= {
        name: name,
        surname: surname,
        address: address,
        phone: phone,
        email: email,
        userCardData: userCardData,
        cartItems: cartElements,
    }

    alldata.push(userData);
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("alldata", JSON.stringify(alldata));
}

function showCart() {
    var cart = [];
    if(localStorage.hasOwnProperty("cart")) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    var itemList = document.getElementById('order-list-id');
    console.log(itemList);
    if(cart.length == 0) itemList.innerHTML += '<h2 class="empty-cart">Нет элементов в корзине </h2>'
    console.log(cart.length)
    for(element of cart) {
        itemList.innerHTML += ` 
        <li class="order-list-item"> 
                    <div class="order-item"> 
                    <p>`+element.name+`</p>
                    <div class="price-button">
                        <p>`+element.price+`</p>
                        <img src="../images/delete.png" class="del-image" onclick="deleteItem(this)">
                    </div>
                    </div>
                </li>
        `;
    }
}

function deleteItem(element) {
    const pElement = element.parentNode.parentNode;
    const boquetename = pElement.childNodes[1].innerText;

    var cart = JSON.parse(localStorage.getItem("cart"));
    var resultCart = []
    if(cart.find(item => item.name == boquetename)) {
        resultCart = cart.filter(elem => elem.name != boquetename);
    }
    console.log(resultCart);
    var wrapDiv = pElement.parentNode;
    wrapDiv.remove();

    localStorage.setItem("cart", JSON.stringify(resultCart));

    var itemList = document.getElementById('order-list-id');
    itemList.innerHTML = "";

    showCart();
}

window.onload = function() {
    document.getElementById('order-form-id').onsubmit = store;
    showCart()
}