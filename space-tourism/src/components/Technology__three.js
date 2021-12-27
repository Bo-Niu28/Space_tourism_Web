import image from "../image/technology/image-lauch-vehicle-landscape.jpg";

const Technology__one = () => {
  return (
    <div className="technology__content">
      <img src={image} alt="hero image" />
      {/* <Technology__Nav /> */}
      <h5 className="tech__subheading">THE TERMINOLOGY…</h5>
      <h4>LAUNCH VEHICLE</h4>
      <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </div>
  );
};
export default Technology__one;
