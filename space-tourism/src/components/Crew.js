import { Outlet } from "react-router-dom";
const Crew = () => {
  return (
    <div className="crew">
      <div className="container">
        <h5 className="des__heading">
          02 <span> Meet your crew </span>
        </h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Crew;
