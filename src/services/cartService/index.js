export const getCart = () => {
    let items = JSON.parse(localStorage.getItem('cart'));
    return items
};

export const addToCart = (item) => {
    let items = [];
    if (localStorage.getItem('cart')) {
        items = JSON.parse(localStorage.getItem('cart'))
    }
    items.push(item);
    localStorage.setItem('cart', JSON.stringify(items))
};

export const removeFromCart = (itemId) => {
    let storageCart = JSON.parse(localStorage.getItem('cart'));
    let itemToRemove = 0;
    for (let item of storageCart) {
        if (item.id === itemId) {
            itemToRemove = item
        }
    }
    const index = storageCart.indexOf(itemToRemove);
    if (index > -1) {
      storageCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(storageCart))
};

export const countCartItems = () => {
    let items = getCart();
    if (items) return items.length;
    else return 0
};

export const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]))
};
