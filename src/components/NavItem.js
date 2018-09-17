import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="nav-link active-nav-link"
      to={to}
    >
      {label}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavItem;
