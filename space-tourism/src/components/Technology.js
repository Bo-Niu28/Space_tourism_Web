import { Outlet } from "react-router";

const Technology = () => {
  return (
    <div className="technology">
      <div className="container">
        <h5 className="des__heading crew__heading">
          03 <span> SPACE LAUNCH 101 </span>
        </h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Technology;
