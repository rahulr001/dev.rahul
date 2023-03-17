import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { navLinks } from "../Constants";
import { menu, close } from "../Assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const R = "< R";
  const name = "AHUL />";
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed  top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between mx-auto max-w-7xl item-center">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p
            className="text-[2rm] sm:text-[2rem] cursor-pointer flex"
            style={{ color: "#4dba87" }}
          >
            {R}
            <span className="text-white">{name}</span>
          </p>
        </Link>
        <ul className="sm:flex flex gap-2 list-none hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#4dba87]" : "text-secondary"
              } font-medium  p-3 text-lg hover:text-[#4dba87]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden vd flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]  object-contain absolute"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
