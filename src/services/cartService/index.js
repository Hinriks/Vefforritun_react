export const getCart = () => {
    let items = JSON.parse(localStorage.getItem('cart'))
    return items
}

export const addToCart = (item) => {
    let items = [];
    if (localStorage.getItem('cart')) {
        items = JSON.parse(localStorage.getItem('cart'))
    }
    items.push(item)
    localStorage.setItem('cart', JSON.stringify(items))
}

export const removeFromCart = (itemId) => {
    let storageCart = JSON.parse(localStorage.getItem('cart'));
    let items = storageCart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(items))
}

export const countCartItems = () => {
    let items = getCart();
    if (items) return items.length
    else return 0
}