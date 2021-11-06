import logo from "../image/shared/logo.svg";
import burger from "../image/shared/icon-hamburger.svg";
const Header = () => {
  return (
    <header>
      <div className="container row">
        <img src={logo} alt="logo" className="logo" />
        <nav className="navbar">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                00 HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                01 DESTINATION
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                02 CREW
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                03 TECHNOLOGY773
              </a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onclick>
          <img src={burger} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
