import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import banner from "../assets/baner-removebg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 sm:px-10 md:px-20 w-full bg-[#e3e6f3] sticky top-0 left-0 drop-shadow-md z-50 h-[5.8rem]">
      {/* Logo */}
      <div>
        <Link to="/" onClick={closeMenu}>
          <img
            src={banner}
            alt="Logo"
            className="bg-transparent w-[8rem] sm:w-[10rem] md:w-[15rem]"
          />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Menu Items */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#e3e6f3] md:bg-transparent transition-all duration-300 md:flex md:items-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-baseline text-center font-semibold text-lg">
          {/* Menu items with closing the menu on click */}
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/shop" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#088178] py-2 md:py-0">
            <Link to="/Cart" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
