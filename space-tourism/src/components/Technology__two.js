import image from "../image/technology/image-space-capsule-landscape.jpg";

const Technology__two = () => {
  return (
    <div className="technology__content">
      <img src={image} alt="hero image" />
      {/* <Technology__Nav /> */}
      <h5 className="tech__subheading">THE TERMINOLOGY…</h5>
      <h4>SPACEPORT</h4>
      <p>
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </div>
  );
};
export default Technology__two;
