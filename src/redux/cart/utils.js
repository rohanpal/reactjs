export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existing) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToAdd.id);
  }
  return cartItems.map(item =>
    item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
