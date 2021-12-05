import crewOne from "../image/crew/image-douglas-hurley.png";
import Crew__Nav from "./Crew__Nav";
const Crew__one = ({ activeNav }) => {
  return (
    <div className="crew__content">
      <img src={crewOne} alt="A Picture of Douglas Hurley" />
      <hr />
      <Crew__Nav activeNav={activeNav} />
      <h5>Commander</h5>
      <h4>Douglas Hurley</h4>
      <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </div>
  );
};

export default Crew__one;
