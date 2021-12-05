import { Link, useLocation } from "react-router-dom";
const Crew__Nav = ({ activeNav }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  return (
    <nav className="crewNav">
      <ul className="crewNav__list">
        <li className="crewNav__item">
          <Link className="crewNav__link" to="/crew/commander">
            <div
              className={`crewNav__style ${
                path === "commander" ? "crewNav__active" : ""
              }`}
            ></div>
          </Link>
        </li>
        <li className="crewNav__item">
          <Link className="crewNav__link" to="/crew/missionspecialist">
            <div
              className={`crewNav__style ${
                path === "missionspecialist" ? "crewNav__active" : ""
              }`}
            ></div>
          </Link>
        </li>
        <li className="crewNav__item">
          <Link className="crewNav__link" to="/crew/pilot">
            <div
              className={`crewNav__style ${
                path === "pilot" ? "crewNav__active" : ""
              }`}
            ></div>
          </Link>
        </li>
        <li className="crewNav__item">
          <Link className="crewNav__link" to="/crew/elightengineer">
            <div
              className={`crewNav__style ${
                path === "elightengineer" ? "crewNav__active" : ""
              }`}
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Crew__Nav;
