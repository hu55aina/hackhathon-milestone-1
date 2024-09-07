var _a;
var products = [];
function displayProducts() {
    var tableBody = document.getElementById('product-table-body');
    if (tableBody) {
        tableBody.innerHTML = '';
        products.forEach(function (product) {
            var row = document.createElement('tr');
            var nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            var quantityCell = document.createElement('td');
            quantityCell.textContent = product.quantity.toString();
            var priceCell = document.createElement('td');
            priceCell.textContent = product.price.toString();
            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            tableBody.appendChild(row);
        });
    }
}
function addProduct() {
    var name = document.getElementById('product-name').value;
    var quantity = +document.getElementById('product-quantity').value;
    var price = +document.getElementById('product-price').value;
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    var newProduct = { name: name, quantity: quantity, price: price };
    products.push(newProduct);
    displayProducts();
}
(_a = document.getElementById('add-product-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addProduct);
