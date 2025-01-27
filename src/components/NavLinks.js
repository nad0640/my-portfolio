import { useState } from "react";
import { NavLink } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import { motion } from "framer-motion";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <motion.div
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
        >
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </motion.div>

        {/*<NavLink to="/about" onClick={() => setIsMenuOpen(false)}>*/}
        {/*  About*/}
        {/*</NavLink>*/}
        <motion.div
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
        >
          <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </NavLink>
        </motion.div>

        {/*<motion.div*/}
        {/*  initial={{ x: -100, opacity: 0 }}*/}
        {/*  animate={{ x: 0, opacity: 1 }}*/}
        {/*  transition={{ delay: 2.2, duration: 0.5, type: "spring" }}*/}
        {/*>*/}
        {/*  /!*<NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>*!/*/}
        {/*  /!*  Contact*!/*/}
        {/*  /!*</NavLink>*!/*/}
        {/*</motion.div>*/}
      </nav>
    </>
  );
};

export default NavLinks;
