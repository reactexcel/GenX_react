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
    state =>
      state.profile.data &&
      state.profile.data[0] &&
      state.profile.data[0].first_name
  );
  const lastName = useSelector(
    state =>
      state.profile.data &&
      state.profile.data[0] &&
      state.profile.data[0].last_name
  );
  return (
    <Navbar className="app-header" light expand="md">
      <NavbarBrand>GenX</NavbarBrand>
      <NavbarToggler
        onClick={() => {
          toggle(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="d-flex justify-content-between navbar-nav w-100" navbar>
          <NavItem>
            <Link to="/app/relatives" className="nav-link">
              Relatives list
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="user-profile">
              <div className="avatar">
                {userName && userName.charAt(0)}
                {lastName && lastName.charAt(0)}
              </div>
              <div className="user-name">
                {userName && userName.charAt(0)} {lastName}
              </div>
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
