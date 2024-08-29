import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Toggle } from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const scrollOffset = -70; // Sesuaikan nilai ini jika perlu
  const scrollDuration = 500; // Durasi animasi scroll dalam milidetik

  const navItems = [
    { to: "home", text: "Home" },
    { to: "services", text: "Services" },
    { to: "experience", text: "Experience" },
    { to: "work", text: "Digital Product" },
    { to: "portfolio", text: "Portfolio" },
  ];

  return (
    <nav className="navbar" style={{ backgroundColor: darkMode ? "black" : "white", boxShadow: darkMode ? "1rem 9px 9px rgba(255, 255, 255, 0.1)" : "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text" style={{ color: darkMode ? "white" : "black" }}>Zaky</span>
          <Toggle />
        </div>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`} style={{ backgroundColor: darkMode ? "black" : "white" }}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={scrollOffset}
                  duration={scrollDuration}
                  onClick={toggleMenu}
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={scrollOffset}
            duration={scrollDuration} 
            onClick={toggleMenu}
          >
            <button className="contact-button">Contact</button>
          </Link>
        </div>
        <div className="navbar-toggle" style={{ color: darkMode ? "white" : "black" }} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;