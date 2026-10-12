import { NavLink } from "react-router-dom";

import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[768px] items-center justify-between px-6">
        <NavLink
          to="/"
          className="font-medium tracking-tight text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
          aria-label="Go to homepage"
        >
          Brandon Gautama
        </NavLink>
        <div className="flex items-center">
          <NavMobile />
          <NavDesktop />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
