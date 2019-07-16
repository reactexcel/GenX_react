import React, { useState } from "react";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header({ showLoginBtn }) {
  return (
    <Navbar className="app-header wo-auth" light expand="md">
      <NavbarBrand>
        <Link to="/" className="nav-link">
          GenX
        </Link>
      </NavbarBrand>
      {showLoginBtn && (
        <NavItem>
          <Link to="/login" className="secondary-link">
            Sign In
          </Link>
        </NavItem>
      )}
    </Navbar>
  );
}
