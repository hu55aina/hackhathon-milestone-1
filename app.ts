
interface Product {
    name: string;
    quantity: number;
    price: number;
}


const products: Product[] = [];


function displayProducts() {
    const tableBody = document.getElementById('product-table-body'); 
    if (tableBody) {
        tableBody.innerHTML = ''; 

        products.forEach(product => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;

            const quantityCell = document.createElement('td');
            quantityCell.textContent = product.quantity.toString();

            const priceCell = document.createElement('td');
            priceCell.textContent = product.price.toString();

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);

            tableBody.appendChild(row); 
        });
    }
}


function addProduct() {
    const name = (document.getElementById('product-name') as HTMLInputElement).value;
    const quantity = +(document.getElementById('product-quantity') as HTMLInputElement).value;
    const price = +(document.getElementById('product-price') as HTMLInputElement).value;

    
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

        const newProduct: Product = { name, quantity, price };
    products.push(newProduct);
    
    displayProducts();
}


document.getElementById('add-product-btn')?.addEventListener('click', addProduct);