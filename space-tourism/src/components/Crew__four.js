import crewFour from "../image/crew/image-anousheh-ansari.png";
const Crew__four = () => {
  return (
    <div className="crew__content">
      <img src={crewFour} alt="A Picture of Anousheh Ansari" />
      <hr />
      {/* <Crew__Nav /> */}
      <h5>Flight Engineer</h5>
      <h4>Anousheh Ansari</h4>
      <p>
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </p>
    </div>
  );
};

export default Crew__four;
