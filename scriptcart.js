let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    const existingItem = cart.find(cartItem => cartItem.item === item);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ item, price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem.item !== item);
    updateCart();
}

function updateQuantity(item, newQuantity) {
    const cartItem = cart.find(cartItem => cartItem.item === item);

    if (cartItem) {
        if (newQuantity <= 0) {
            removeFromCart(item);
        } else {
            cartItem.quantity = newQuantity;
        }
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Reset cart display
    cartItems.innerHTML = "";

    totalPrice = 0;

    // Populate cart items
    cart.forEach(cartItem => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${cartItem.item} - $${cartItem.price.toFixed(2)} x 
            <input type="number" min="1" value="${cartItem.quantity}" 
                   onchange="updateQuantity('${cartItem.item}', this.value)">
            = $${(cartItem.price * cartItem.quantity).toFixed(2)}
            <button onclick="removeFromCart('${cartItem.item}')">Remove</button>
        `;
        cartItems.appendChild(li);

        totalPrice += cartItem.price * cartItem.quantity;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function sendOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const address = document.getElementById("address").value.trim();
    if (!address) {
        alert("Please enter a delivery address.");
        return;
    }

    const cashConfirm = document.getElementById("cash-confirm");
    if (!cashConfirm.checked) {
        alert("You must confirm that payment is only available in cash.");
        return;
    }

    // Prepare email content
    let emailBody = "Hello,\n\nI would like to order the following items:\n\n";
    cart.forEach(cartItem => {
        emailBody += `${cartItem.item} - €${cartItem.price.toFixed(2)} x ${cartItem.quantity} = €${(cartItem.price * cartItem.quantity).toFixed(2)}\n`;
    });
    emailBody += `\nTotal: €${totalPrice.toFixed(2)}\n\nDelivery Address:\n${address}\n\nNote: Payment will be made in cash.\n\nThank you!`;

    // Send email via mailto
    const email = "theitalianspoon@gmail.com"; 
    const subject = "New Order from The Italien Spoon";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open mailto link
    window.location.href = mailtoLink;
}
