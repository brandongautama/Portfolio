import { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import { useClickAway } from "react-use";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        color="#0072ff"
        direction="right"
      />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl -0 top-[3.5rem] p-5 pt-0 border-b border-b-white/20">
          <ul className="grid gap-2 flex-col">
            {isOpen && (
              <div className="fixed left-0 shadow-4xl rounded-lg right-0 top-[3.5rem] p-3 bg-slate-200/100 border-b border-b-white/20">
                <ul className="grid gap-2">
                  {routes.map((route) => {
                    return (
                      <li
                        key={route.title}
                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr bg-slate-300/20 via-neutral-150 to-neutral-100"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-100"
                          }
                          href={route.href}
                        >
                          <span></span>
                          <span className="flex gap-1 text-lg font-poppins text-black">
                            {route.title}
                          </span>
                          <span></span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
