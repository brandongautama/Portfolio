import { routes } from "../routes";

import { Link, animateScroll as scroll } from "react-scroll";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 mr-8 md:flex md:items-center">
      {routes.map((route) => {
        const { href, title } = route;
        return (
          <li key={route.title}>
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all font-poppins"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
