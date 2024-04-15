import { Link } from "react-router-dom";
import Transition from "../transition";

const Navbar = () => {
  return (
    <div className="flex ml-10 mr-10 mt-5">
      <div className="">
        <Link to="/">Xudayfi</Link>
      </div>
      <div className="flex items-center justify-center gap-5 ml-[60em]">
        <div className="tracking-wide font-bold">
          <Link to="/">home</Link>
        </div>
        <div className="tracking-wide font-bold">
          <Link to="/about">About</Link>
        </div>
        <div className="tracking-wide font-bold">
          <Link to="/portfolio">portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Transition(Navbar);
