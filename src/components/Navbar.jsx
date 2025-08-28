import { NavLink } from "react-router-dom";

import { routes } from "../routes";
import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        aria-label="Go to homepage"
      >
        <p className="blue-gradient_text">BG</p>
      </NavLink>
      <div className="flex text-lg font-medium">
        <NavMobile />
        <NavDesktop />
      </div>
    </header>
  );
};

export default Navbar;
