import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { CartContext } from "../../contexts/CartContext";
import "./styles/NavBar.css";

const NavBar = () => {
  const [cart] = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar__Element">
        <Link className="navbar__Link" to="/">
          Home
        </Link>
      </div>
      <div className="navbar__Element">
        <Link className="navbar__Link" to="/store">
          Store
        </Link>
      </div>
      <div className="navbar__Element">
        <Link className="navbar__Link" to="/sales">
          Sales
        </Link>
      </div>
      <div className="navbar__Search navbar__Element">
        <input type="text" className="navbar__SearchInput" />
        <SearchIcon className="navbar_SearchIcon" />
      </div>
      <div className="navbar__Cart navbar__Element">
        <Link className="navbar__Link" to="/cart">
          <ShoppingCartIcon />
        </Link>
        <span className="navbar__CartNumber">{cart.length}</span>
      </div>
    </nav>
  );
};

export default NavBar;
