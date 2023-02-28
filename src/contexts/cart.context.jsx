import { createContext, useState } from "react";

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

  const addToCart = (productToAdd) => {
    setCartItems(addItems(cartItems, productToAdd));
  };
  const value = { toggleCart, setToggleCart, addToCart, cartItems };

  return (
    <>
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
