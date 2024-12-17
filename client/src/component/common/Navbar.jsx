import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "../../assets/sd_logo.png";
import MobileNavbar from "./MobileNavbar";

export function Navbar({ brandName }) {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setOpenNav(!openNav);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const navList = (
    <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`text-lg font-semibold ${
              location.pathname === item.path
                ? "text-[#ff2759]"
                : "text-black hover:text-[#ff2759]"
            }`}
            onClick={() => setOpenNav(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <button className="bg-[#ff2759] text-white py-3 px-6 rounded-lg font-semibold">
        Quick Enquiry
      </button>
    </ul>
  );

  return (
    <>
      {/* Navbar - Desktop */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:py-6 py-3 transition-all duration-300 ${
          isScrolled ? "bg-white text-gray-800" : "bg-transparent text-white"
        } hidden lg:block`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Brand Logo" className="h-12" />
          </Link>
          <div>{navList}</div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <MobileNavbar
        isScrolled={isScrolled}
        toggleSidebar={toggleSidebar}
        openNav={openNav}
      />
    </>
  );
}

Navbar.defaultProps = {
  brandName: "Social Dynamics",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
};

export default Navbar;
