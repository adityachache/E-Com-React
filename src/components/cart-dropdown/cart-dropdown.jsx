import { Button } from "flowbite-react";
import React, { useContext } from "react";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
        <div className="mt-6 mx-auto">
          <Button color={"dark"} pill={true} outline={true}>
            GO TO CHECKOUT
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartDropdown;
