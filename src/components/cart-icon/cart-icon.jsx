import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

function CartIcon() {
  const { toggleCart, setToggleCart } = useContext(CartContext);

  const toggle = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <>
      <div className="cart-icon-container " onClick={toggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </>
  );
}

export default CartIcon;
