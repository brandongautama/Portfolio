import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../routes";
import { useClickAway } from "react-use";

import { Link, animateScroll as scroll } from "react-scroll";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div ref={ref} className=" md:hidden lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        color="#0072ff"
        direction="right"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl rounded-xl right-0 top-[3.5rem] p-2 mt-4 bg-slate-200/100 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.href}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr bg-white/80 via-neutral-100 to-neutral-100"
                  >
                    {/* <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-3 rounded-xl bg-neutral-0"
                      }
                      href={route.href}
                    > */}
                    <Link
                      activeStyle={{ color: "#3b82f6" }}
                      to={route.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                      className="flex items-center justify-between w-full p-3 rounded-xl bg-neutral-0 cursor-pointer"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      <span />
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <span />
                    </Link>
                    {/* </a> */}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
