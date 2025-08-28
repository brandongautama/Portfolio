import { routes } from "../routes";
import { useLocation } from "react-router-dom";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const NavDesktop = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="hidden lg:flex lg:items-center gap-5">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li key={route.title} className="cursor-pointer">
              {isHomePage ? (
                <ScrollLink
                  activeStyle={{ 
                    color: "#3b82f6",
                    borderBottom: "2px solid #3b82f6",
                    paddingBottom: "2px"
                  }}
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  className="flex items-center gap-1 hover:text-neutral-400 transition-all font-poppins pb-1 border-b-2 border-transparent hover:border-neutral-300"
                >
                  {title}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/${href}`}
                  className="flex items-center gap-1 hover:text-neutral-400 transition-all font-poppins pb-1 border-b-2 border-transparent hover:border-neutral-300"
                >
                  {title}
                </RouterLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
