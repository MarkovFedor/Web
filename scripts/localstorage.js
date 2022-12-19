function store() {
    var allItems = JSON.parse(localStorage.getItem("allItems"));
    if(!allItems) allItems = [];
    var images = document.getElementById("images");
    var imagesChildren = document.getElementById("images").childNodes[0].currentSrc
    console.log(imagesChildren)
    var boqueteName = document.getElementById('boquete-name').value;
    var boquetePrice = document.getElementById('boquete-price').value;
    var boqueteDescription = document.getElementById('boquete-description').value;
    const item = {
        name: boqueteName,
        price: "$" + boquetePrice,
        description: boqueteDescription,
        images: imagesChildren
    }

    allItems.push(item);
    localStorage.setItem("allItems", JSON.stringify(allItems));
}

window.onload = function() {
    document.getElementById('selling-form-id').onsubmit = store
}