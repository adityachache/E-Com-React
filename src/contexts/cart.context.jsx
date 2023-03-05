import { createContext, useEffect, useState } from "react";

const addItems = (cartItems, productToAdd) => {
  const productToAddExists = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (productToAddExists) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItems) => {
      return total + cartItems.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addItems(cartItems, productToAdd));
  };

  const value = { toggleCart, setToggleCart, addToCart, cartItems, cartCount };

  return (
    <>
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
