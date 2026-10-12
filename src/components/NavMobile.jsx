import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../routes";
import { useClickAway } from "react-use";
import { useLocation } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setOpen(false);
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div ref={ref} className="-mr-3.5 md:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        color="#1F2328"
        direction="right"
        duration={0.4}
        label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      />
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/5 z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Mobile menu */}
            <motion.nav
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed left-4 right-4 top-16 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-hairline z-50 overflow-hidden"
            >
              <ul className="py-2">
                {routes.map((route, idx) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: idx * 0.05,
                        ease: "easeOut"
                      }}
                      key={route.href}
                      className="mx-2 mb-1 last:mb-0"
                    >
                      {isHomePage ? (
                        <ScrollLink
                          activeClass="!text-ink bg-canvas"
                          to={route.href}
                          href={`#${route.href}`}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                          className="flex items-center w-full px-4 py-3 text-ink-muted text-base rounded-lg cursor-pointer hover:bg-canvas hover:text-ink transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                          onClick={() => setOpen(false)}
                        >
                          {route.title}
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to={`/#${route.href}`}
                          className="flex items-center w-full px-4 py-3 text-ink-muted text-base rounded-lg cursor-pointer hover:bg-canvas hover:text-ink transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                          onClick={() => setOpen(false)}
                        >
                          {route.title}
                        </RouterLink>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
