import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__List">
        <li className="navbar__Name">
          <Link to="/cart" className="navbar__Link">
            <ShoppingCartIcon />
          </Link>
        </li>
        <li className="navbar__Name">
          <Link to="/about_us" className="navbar__Link">
            About Us
          </Link>
        </li>
        <li className="navbar__Name">
          <Link to="/sales" className="navbar__Link">
            Sales
          </Link>
        </li>
        <li className="navbar__Name">
          <Link to="/store" className="navbar__Link">
            Store
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
