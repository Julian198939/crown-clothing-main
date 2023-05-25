import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../components/context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/card-dropdown/card-dropdown.component";
import { CartContext } from "../../components/context/card.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
