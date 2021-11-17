import Des__Moon from "./Des__Moon";
import { Outlet } from "react-router-dom";
const Distination = () => {
  return (
    <div className="destination">
      <div className="container">
        <h5 className="des__heading">
          01 <span> Pick Your Destination </span>
        </h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Distination;
