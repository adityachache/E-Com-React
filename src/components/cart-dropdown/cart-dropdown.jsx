import { Button } from "flowbite-react";
import React from "react";

function CartDropdown() {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          <div className=" mt-auto mx-auto">
            <Button color={"dark"} pill={true} outline={true}>
              GO TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDropdown;
