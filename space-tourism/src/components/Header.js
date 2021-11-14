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
            <Link to="/">
              <ListItem title={"00 HOME"} onToggle={burgerToggle} />
            </Link>
            <Link to="destination">
              <ListItem title={"01 DESTINATION"} onToggle={burgerToggle} />
            </Link>
            <Link to="crew">
              <ListItem title={"02 CREW"} onToggle={burgerToggle} />
            </Link>
            <Link to="technology">
              <ListItem title={"03 TECHNOLOGY"} onToggle={burgerToggle} />
            </Link>
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
