import crewThree from "../image/crew/image-victor-glover.png";
const Crew__three = () => {
  return (
    <div className="crew__content">
      <img src={crewThree} alt="A Picture of Victor Glover" />
      {/* <Crew__Nav /> */}
      <h5>PILOT</h5>
      <h4>Victor Glover</h4>
      <p>
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </p>
    </div>
  );
};

export default Crew__three;
