import imageTitan from "../image/destination/image-titan.png";
import Des__Nav from "./Des__Nav";
const Des__Titan = () => {
  return (
    <div className="Destination__content">
      <img src={imageTitan} alt="Europa picture" />
      <Des__Nav />
      <h3>TITAN</h3>
      <p>
        TThe only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr style={{ borderTop: ".5px solid grey" }} />
      <h6>AVG. DISTANCE</h6>
      <h5 className="subheading-1">1.6 BIL. km</h5>
      <h6>Est. travel time</h6>
      <h5 className="subheading-1">7 years</h5>
    </div>
  );
};

export default Des__Titan;
