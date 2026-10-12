import { routes } from "../routes";
import { useLocation } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const NavDesktop = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="hidden md:flex md:items-center gap-5 text-sm">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li key={route.title} className="cursor-pointer">
              {isHomePage ? (
                <ScrollLink
                  activeClass="!text-ink"
                  to={href}
                  href={`#${href}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="text-ink-muted transition hover:text-ink rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  {title}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/#${href}`}
                  className="text-ink-muted transition hover:text-ink rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
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
