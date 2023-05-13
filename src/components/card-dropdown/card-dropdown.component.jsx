import "./card-dropdown.style.scss";
import React from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go TO CHECK OUT</Button>
    </div>
  );
};

export default CartDropdown;
