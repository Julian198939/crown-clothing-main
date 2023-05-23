import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.sytle";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px; /* increase width for more breathing room */
  height: 320px; /* increase height for more scrolling space */
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #000000;
  background-color: #f2f2f2; /* change background color to light gray */
  top: 90px;
  right: 40px;
  z-index: 5;
  font-family: sans-serif; /* use a generic sans-serif font */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  text-align: center; /* center the message */
  color: #777; /* make the message less prominent */
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* only show vertical scrollbar when needed */
  margin-bottom: 10px; /* add some margin at the bottom */
  margin-top: 5px;
`;

export const CheckoutButton = styled.button`
  padding: 10px 10px;
  font-size: 16 px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #c7c4c4c2;
  color: #000000;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
