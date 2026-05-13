// components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes menu if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { to: "hero", label: "Home" },
    { to: "services", label: "Services" },
    { to: "therapist", label: "Therapist" },
    { to: "cta", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container"> {/* Changed from "container" to "nav-container" to match your CSS */}
        <Link to="hero" smooth={true} duration={500} offset={-80} className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", objectFit: "contain", borderRadius: "50%" }}
          />
          <span className="brand-text">
            Hypnosis<span className="gradient-text">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu-desktop">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} smooth={true} duration={500} offset={-80}
              className="nav-link" activeClass="active" spy={true}>
              {item.label}
            </Link>
          ))}
          <Link to="cta" smooth={true} duration={500} offset={-80} className="nav-cta">
            Book Session
          </Link>
        </div>

        {/* Mobile Menu Button - This toggles the state */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu via Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay to close menu when clicking outside */}
              <motion.div 
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              
              <motion.div 
                className="mobile-menu-content" // Use a unique class to avoid CSS conflicts
                initial={{ x: "100%" }} 
                animate={{ x: 0 }}
                exit={{ x: "100%" }} 
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="mobile-menu-items">
                  {navItems.map((item, index) => (
                    <motion.div key={item.to} initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      <Link to={item.to} smooth={true} duration={500} offset={-70}
                        className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}
                        activeClass="active" spy={true}>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <Link to="cta" smooth={true} duration={500} offset={-70}
                    className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
                    Book Session
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;