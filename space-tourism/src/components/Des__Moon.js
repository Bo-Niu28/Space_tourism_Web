import imageMoon from "../image/destination/image-moon.png";
import Des__Nav from "./Des__Nav";
const Des__Moon = () => {
  return (
    <div className="Destination__content">
      <img src={imageMoon} alt="Moon picture" />
      <Des__Nav />
      <h3>MOON</h3>
      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr style={{ borderTop: ".5px solid grey" }} />
      <h6>AVG. DISTANCE</h6>
      <h5 className="subheading-1">384,400 km</h5>
      <h6>Est. travel time</h6>
      <h5 className="subheading-1">3 days</h5>
    </div>
  );
};

export default Des__Moon;
