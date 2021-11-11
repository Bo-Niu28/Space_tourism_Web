import logo from "../image/shared/logo.svg";
import burger from "../image/shared/icon-hamburger.svg";
import close from "../image/shared/icon-close.svg";
import ListItem from "./ListItem";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="logo" className="logo" />
        <nav className={`navbar`}>
          <ul className={`nav__list ${isOpen ? "nav__list--active" : ""}`}>
            <ListItem title={"00 HOME"} />
            <ListItem title={"01 DESTINATION"} />
            <ListItem title={"02 CREW"} />
            <ListItem title={"03 TECHNOLOGY"} />
          </ul>
        </nav>
        <div className="hamburger" onClick={burgerToggle}>
          {isOpen ? (
            <img src={close} alt="Close Icon" />
          ) : (
            <img src={burger} alt="Burger Icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
