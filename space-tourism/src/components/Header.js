import logo from "../image/shared/logo.svg";
import burger from "../image/shared/icon-hamburger.svg";
import ListItem from "./ListItem";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="logo" className="logo" />
        <nav className={`navbar`}>
          <ul className={`nav__list ${isOpen ? "nav__list--active" : ""}`}>
            <ListItem title={"00 HOME"} />
            <ListItem title={"01 HOME"} />
            <ListItem title={"02 HOME"} />
            <ListItem title={"03 HOME"} />
          </ul>
        </nav>
        <div className="hamburger" onClick={burgerToggle}>
          <img src={burger} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
