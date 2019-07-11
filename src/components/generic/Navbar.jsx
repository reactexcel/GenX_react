import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../redux/actions";

export default function Navbars(props) {
  const dispatch = useDispatch();
  const [isOpen, toggle] = useState(false);
  const userName = useSelector(
    state => state.profile.data && state.profile.data.first_name
  );
  return (
    <Navbar className="app-header" light expand="md">
      <NavbarBrand href="/">GenX</NavbarBrand>
      <NavbarToggler
        onClick={() => {
          toggle(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/app/tools">FAMILY & FRIENDS</Link>{" "}
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="user-profile">
              <div class="avatar">2S</div>
              <div class="user-name">2 {userName}</div>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/app/my-profile">
                <DropdownItem>View Your Profile</DropdownItem>
              </Link>
              <DropdownItem
                onClick={() => {
                  localStorage.removeItem("genXToken");
                  dispatch(action.logOut({}));
                  props.history.push("/");
                }}
              >
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
