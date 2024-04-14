// import { NavLink } from "react-router-dom";

import { routes } from "../routes";
import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

const Navbar = () => {
  // return (
  //   <header className="header">
  //     <NavLink
  //       to="/"
  //       className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
  //     >
  //       <p className="blue-gradient_text">BG</p>
  //     </NavLink>
  //     <nav className="flex text-lg gap-7 font-medium">
  //       <NavLink
  //         to="/about"
  //         className={({ isActive }) =>
  //           isActive ? "text-blue-500" : "text-black"
  //         }
  //       >
  //         About
  //       </NavLink>
  //       <NavLink
  //         to="/projects"
  //         className={({ isActive }) =>
  //           isActive ? "text-blue-500" : "text-black"
  //         }
  //       >
  //         Projects
  //       </NavLink>
  //     </nav>
  //   </header>
  // );

  return (
    <header className="header">
      <span className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        {/* <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        > */}
        <p className="blue-gradient_text">BG</p>
        {/* </NavLink> */}
      </span>
      <nav className="flex text-lg gap-7 font-medium mr-6">
        <NavMobile />
        <NavDesktop />
      </nav>
    </header>
  );
};

export default Navbar;
