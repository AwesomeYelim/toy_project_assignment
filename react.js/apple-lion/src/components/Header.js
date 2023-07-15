import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../Images/icons/logo-sm.png";
import cart from "../Images/icons/cart-sm.png";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isAuth, isAuthenticated, signOut } = useContext(AuthContext);


  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <div className="nav-wrapper fixed-top navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/">Iphone</Nav.Link>
              <Nav.Link href="/">Ipad</Nav.Link>
              <Nav.Link href="/">Support</Nav.Link>

              {isAuth ? (
                <>
                  <Nav.Link onClick={signOut}>Logout</Nav.Link>
                  <Nav.Link href="/user/cart">
                    <img src={cart} alt="cart" />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/login">
                    <img src={cart} alt="cart" />
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      Header
    </div>
  );
}

export default Header;
