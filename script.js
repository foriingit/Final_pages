document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
    const cartNotification = document.getElementById('cart-notification');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            cartNotification.classList.remove('hidden');
            cartNotification.style.display = 'block';

            setTimeout(function() {
                cartNotification.style.display = 'none';
            }, 2000);
        });
    }
});