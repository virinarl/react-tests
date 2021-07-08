import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__List">
        <li className="navbar__Cart navbar__Name">
          <Link to="/cart" className="navbar__Link">
            <ShoppingCartIcon />
          </Link>
          <span className="navbar__CartNumber">10</span>
        </li>
        <li className="navbar__Name navbar__Search">
          <input type="text" className="navbar__SearchInput" />
          <SearchIcon className="navbar_SearchIcon" />
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
};

export default NavBar;
