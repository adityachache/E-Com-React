import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} className=" w-1/3" />
      <div className="item-details">
        <span className=" text-sm">{name}</span>
        <span className="price text-sm">
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
};

export default CartItem;
