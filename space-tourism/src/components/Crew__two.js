import crewTwo from "../image/crew/image-mark-shuttleworth.png";
import Crew__Nav from "./Crew__Nav";
const Crew__two = () => {
  return (
    <div className="crew__content">
      <img src={crewTwo} alt="A Picture of Mark Shuttleworth" />
      <hr />
      <Crew__Nav />
      <h5>Mission Specialist </h5>
      <h4>MARK SHUTTLEWORTH</h4>
      <p>
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </p>
    </div>
  );
};

export default Crew__two;
