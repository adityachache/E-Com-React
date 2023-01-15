import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "flowbite-react";
import crown from "../../assets/crown.svg";

function Navigation() {
  return (
    <>
      <Navbar
        fluid={true}
        border={true}
        style={{
          padding: "20px",
        }}
      >
        <div>
          <Link to={"/"}>
            <img src={crown} className="ml-10 h-6 sm:h-9" alt="Brand Logo" />
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse
          style={{
            marginRight: "50px",
          }}
        >
          <Link to={"/shop"}>
            <p className="navbar-link">Shop</p>
          </Link>
          <Link to={"/auth"}>
            <p className="navbar-link">Sign In</p>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
