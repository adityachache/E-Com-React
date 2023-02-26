import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [toggleCart, setToggleCart] = useState(false);
  const value = { toggleCart, setToggleCart };

  return (
    <>
      <CartContext.Provider value={value}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
