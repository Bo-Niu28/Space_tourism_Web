import imageEuropa from "../image/destination/image-europa.png";
import Des__Nav from "./Des__Nav";
const Des__Europa = () => {
  return (
    <div className="Destination__content">
      <img src={imageEuropa} alt="Europa picture" />
      <Des__Nav />
      <h3>EUROPA</h3>
      <p>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
      <hr style={{ borderTop: ".5px solid grey" }} />
      <h6>AVG. DISTANCE</h6>
      <h5 className="subheading-1">628 MIL. km</h5>
      <h6>Est. travel time</h6>
      <h5 className="subheading-1">3 years</h5>
    </div>
  );
};

export default Des__Europa;
