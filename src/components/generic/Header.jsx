import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <Navbar className="app-header" light expand="md">
      <NavbarBrand href="/">GenX</NavbarBrand>
    </Navbar>
  );
}
