import { Link, useLocation } from "react-router-dom";
const Des__Nav = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className="desNav__list">
        <li
          className={`desNav__item ${
            location.pathname.split("/")[2] === "moon"
              ? "desNav__item--active"
              : ""
          }`}
        >
          <Link to="/destination/moon" className="desNav__link ">
            <p className="nav__text">MOON</p>
          </Link>
        </li>
        <li
          className={`desNav__item ${
            location.pathname.split("/")[2] === "mars"
              ? "desNav__item--active"
              : ""
          }`}
        >
          <Link to="/destination/mars" className="desNav__link">
            <p className="nav__text">MARS</p>
          </Link>
        </li>
        <li
          className={`desNav__item ${
            location.pathname.split("/")[2] === "europa"
              ? "desNav__item--active"
              : ""
          }`}
        >
          <Link to="/destination/europa" className="desNav__link">
            <p className="nav__text">EUROPA</p>
          </Link>
        </li>
        <li
          className={`desNav__item ${
            location.pathname.split("/")[2] === "titan"
              ? "desNav__item--active"
              : ""
          }`}
        >
          <Link to="/destination/titan" className="desNav__link">
            <p className="nav__text">TITAN</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Des__Nav;
