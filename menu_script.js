let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

const menuItems = document.querySelectorAll("#menu li");
const orderList = document.getElementById("order-list");
const totalElement = document.getElementById("total");
const checkoutForm = document.getElementById("order-form");

function updateCheckoutPage() {
    if (orderList && totalElement) {
        
        orderList.innerHTML = '';
        cart.forEach(item => {
            const orderItem = document.createElement("li");
            orderItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            orderList.appendChild(orderItem);
        });
        
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
}


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const itemName = item.getAttribute("data-name");
        const itemPrice = parseFloat(item.getAttribute("data-price"));

       
        cart.push({ name: itemName, price: itemPrice });
        total += itemPrice;

       
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total.toFixed(2));

        
        alert(`${itemName} has been added to your cart!`);
    });
});


if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const name = document.getElementById("name").value;
        const cardNumber = document.getElementById("card-number").value;
        const cvv = document.getElementById("cvv").value;
        const expirationDate = document.getElementById("expiration-date").value;
        const address = document.getElementById("address").value;

        alert(`Thank you, ${name}! Your order has been placed.\n\nOrder Summary:\n${cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join("\n")}\n\nTotal: $${total.toFixed(2)}\n\nDelivery to: ${address}`);

        cart = [];
        total = 0;
        localStorage.removeItem('cart');
        localStorage.removeItem('total');

        window.location.href = "index.html";
    });
}

document.addEventListener("DOMContentLoaded", updateCheckoutPage);
