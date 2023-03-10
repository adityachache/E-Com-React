import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "flowbite-react";
import crown from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

function Navigation() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { toggleCart } = useContext(CartContext);
  // console.log(currentUser);

  return (
    <>
      <Navbar
        fluid={true}
        border={true}
        style={{
          padding: "20px",
        }}
      >
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={crown}
            className="ml-10 h-6 sm:h-9 cursor-pointer"
            alt="Brand Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          style={{
            marginRight: "50px",
          }}
        >
          <Navbar.Link onClick={() => navigate("shop")}>
            <p className="navbar-link">Shop</p>
          </Navbar.Link>
          {currentUser ? (
            <Navbar.Link onClick={signOutUser}>
              <p className="navbar-link">Sign Out</p>
            </Navbar.Link>
          ) : (
            <Navbar.Link onClick={() => navigate("auth")}>
              <p className="navbar-link">Sign In</p>
            </Navbar.Link>
          )}
          <Navbar.Link>
            <CartIcon />
          </Navbar.Link>
        </Navbar.Collapse>
        {toggleCart && <CartDropdown />}
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
