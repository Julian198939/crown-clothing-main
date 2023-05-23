import { useContext } from "react";

import {
  ShoppingIcon,
  CartIconContainer,
  Itemcount,
} from "./card-icon.style.jsx";
import { CartContext } from "../context/card.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <Itemcount>{cartCount}</Itemcount>
    </CartIconContainer>
  );
};

export default CartIcon;
