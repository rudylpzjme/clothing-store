export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItem = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === item.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === existingCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );

}

export const clearItemFromCart = (cartItems, cartItem) => {
    return cartItems.filter(item => item.id !== cartItem.id);
}
