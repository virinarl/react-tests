import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__Logo">
        <Link to="/" className="header__Link">
          <h1 className="header__Title">
            <span className="header__SpecialLetter">E</span>pic
            <span className="header__SpecialLetter">B</span>oss
            <small className="header__TitleLittle">.com</small>
          </h1>
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
