import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../routes";
import { useClickAway } from "react-use";
import { useLocation } from "react-router-dom";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
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
    <div ref={ref} className="lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={22}
        toggle={setOpen}
        color={isOpen ? "#3b82f6" : "#0072ff"}
        direction="right"
        duration={0.4}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
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
              className="fixed left-4 right-4 top-[4.5rem] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
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
                          activeStyle={{ 
                            color: "#3b82f6",
                            backgroundColor: "#eff6ff"
                          }}
                          to={route.href}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={300}
                          className="flex items-center w-full px-4 py-4 text-gray-700 font-poppins font-medium text-base rounded-xl cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-[0.98]"
                          onClick={() => setOpen(false)}
                        >
                          {route.title}
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to={`/${route.href}`}
                          className="flex items-center w-full px-4 py-4 text-gray-700 font-poppins font-medium text-base rounded-xl cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-[0.98]"
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
