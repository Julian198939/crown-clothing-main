import React from "react";

import CartItem from "../card-item/card-item.comonent";
import { useContext } from "react";
import { CartContext } from "../context/card.context";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CheckoutButton,
} from "./card-dropdown.style.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CheckoutButton onClick={goToCheckOutHandler}>
        Go TO CHECK OUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
