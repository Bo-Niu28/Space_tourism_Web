import imageMars from "../image/destination/image-mars.png";
const Des__Mars = () => {
  return (
    <div className="Destination__content">
      <img src={imageMars} alt="Moon picture" />
      <Des__Nav />
      <h3>Mars</h3>
      <p>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <hr style={{ borderTop: ".5px solid grey" }} />
      <h6>AVG. DISTANCE</h6>
      <h5 className="subheading-1">225 MIL. km</h5>
      <h6>Est. travel time</h6>
      <h5 className="subheading-1">9 months</h5>
    </div>
  );
};

export default Des__Mars;
