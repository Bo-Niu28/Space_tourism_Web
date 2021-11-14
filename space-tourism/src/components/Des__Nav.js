import { Link } from "react-router-dom";
const Des__Nav = () => {
  return (
    <nav>
      <ul className="desNav__list">
        <li className="desNav__item desNav__item--active">
          <Link to="destination/*" className="desNav__link ">
            <p className="nav__text">MOON</p>
          </Link>
        </li>
        <li className="desNav__item">
          <Link to="mars" className="desNav__link">
            <p className="nav__text">MARS</p>
          </Link>
        </li>
        <li className="desNav__item">
          <Link to="europa" className="desNav__link">
            <p className="nav__text">EUROPA</p>
          </Link>
        </li>
        <li className="desNav__item">
          <Link to="titan" className="desNav__link">
            <p className="nav__text">TITAN</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Des__Nav;
