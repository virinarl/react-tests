import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__title">
          <span className="header__specialLetter">E</span>pic
          <span className="header__specialLetter">B</span>oss
          <small className="header__titleLittle">.com</small>
        </h1>
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
