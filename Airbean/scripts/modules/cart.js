export function addToCart(item) {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (isInCart(item)) {
        const index = cart.findIndex(cartItem => cartItem.id === item.id);
        cart[index].qty++;
    } else {
        cart.push({
            ...item,
            qty : 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function isInCart(item) {
    if(getCart().some(cartItem => cartItem.title === item.title)) {
        return true;
    } else {
        return false;
    }
}

export function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
}

export function getCartSize() {
    return getCart().reduce((total, item) => total + item.qty, 0);
}