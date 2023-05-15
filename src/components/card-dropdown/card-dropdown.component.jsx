import "./card-dropdown.style.scss";
import React from "react";
import Button from "../button/button.component";
import CartItem from "../card-item/card-item.comonent";
import { useContext } from "react";
import { CartContext } from "../context/card.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>Go TO CHECK OUT</Button>
    </div>
  );
};

export default CartDropdown;
