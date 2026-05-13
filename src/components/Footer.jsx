


// components/Footer.jsx - UPDATED with new logo
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaHeart, FaInstagram, FaFacebook, FaTwitter,
  FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt
} from "react-icons/fa";

// ✅ Import new logo
import logo from "../assets/images/logo.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "hero", label: "Home" },
    // { to: "pain", label: "Understanding Pain" },
    // { to: "subconscious", label: "Subconscious Mind" },
    // { to: "transformation", label: "Transformation" },
    { to: "services", label: "Services" },
    // { to: "testimonials", label: "Testimonials" },
    { to: "therapist", label: "Therapist" },
    { to: "cta", label: "Contact" },
  ];

  const services = [
    "Hypnotherapy",
    "Addiction & Depression",
    "Law of Attraction",
    "Ho'oponopono",
    "Past Life Regression",
    "Relationship & Parenting",
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+91 98256 00779" },
    { icon: <FaEnvelope />, text: "nehakokra2@yahoo.com" },
    { icon: <FaInstagram />, text: "@hypnosis_solutions" },
    { icon: <FaFacebook />, text: "Hypnosis Solutions" },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          <div className="row g-5">

            {/* ✅ Brand Column - Logo image */}
            <div className="col-lg-4">
              <div className="footer-brand">
                <img
                  src={logo}
                  alt="Hypnosis Solutions Logo"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                    borderRadius: "50%",
                    border: "2px solid rgba(123,75,255,0.4)",
                  }}
                />
                <h3 className="brand-name" style={{ marginLeft: "12px" }}>
                  Hypnosis<span className="gradient-text">Solutions</span>
                </h3>
              </div>
              <p className="brand-description">
                Guiding you from pain to peace through the transformative power
                of hypnotherapy and subconscious healing. Your journey to wholeness
                starts here.
              </p>
              <div className="trust-badge">
                <FaHeart className="trust-icon" />
                <span>15+ Years of Compassionate Care</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4">
              <h4 className="footer-title">Explore</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} smooth={true} duration={500} offset={-80} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-4">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to="services" smooth={true} duration={500} offset={-80} className="footer-link">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-4">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="contact-info">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <span className="contact-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="newsletter-mini">
                <input type="email" placeholder="Your email" className="newsletter-input-mini" />
                <motion.button className="newsletter-btn-mini"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Subscribe
                </motion.button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">© {currentYear} HypnosisSolutions. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="social-links-footer">
                <motion.a href="https://www.instagram.com/hypnosis_solutions/" className="social-link"
                  whileHover={{ y: -3, color: "#7B4BFF" }} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </motion.a>
                <motion.a href="https://www.facebook.com/hypnosissolutions1/" className="social-link"
                  whileHover={{ y: -3, color: "#55C6F7" }} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </motion.a>
                <motion.a href="https://wa.me/919825600779" className="social-link"
                  whileHover={{ y: -3, color: "#25D366" }} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </motion.a>
                {/* <motion.a href="#" className="social-link" whileHover={{ y: -3, color: "#FF0000" }}>
                  <FaYoutube />
                </motion.a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: #0A1528;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .footer-main {
          padding: 60px 0 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
        }
        .brand-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0;
        }
        .brand-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.9rem;
        }
        .trust-icon { color: #FFD700; }
        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--gradient-2);
        }
        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin-bottom: 0.8rem; }
        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .footer-link:hover { color: var(--accent-cyan); padding-left: 5px; }
        .contact-info { list-style: none; padding: 0; margin: 0 0 1.5rem; }
        .contact-info li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .contact-icon { color: var(--accent-purple); font-size: 1.1rem; }
        // .newsletter-mini { display: flex; gap: 0.5rem; }
        // .newsletter-input-mini {
        //   flex: 1;
        //   padding: 0.6rem 1rem;
        //   background: rgba(255, 255, 255, 0.1);
        //   border: 1px solid rgba(255, 255, 255, 0.2);
        //   border-radius: 50px;
        //   color: white;
        //   font-size: 0.9rem;
        // }
        // .newsletter-input-mini::placeholder { color: rgba(255, 255, 255, 0.5); }
        // .newsletter-input-mini:focus { outline: none; border-color: var(--accent-purple); }
        // .newsletter-btn-mini {
        //   padding: 0.6rem 1.2rem;
        //   background: linear-gradient(135deg, #7B4BFF, #55C6F7);
        //   color: white;
        //   border: none;
        //   border-radius: 50px;
        //   font-weight: 600;
        //   font-size: 0.9rem;
        //   cursor: pointer;
        // }
        // .footer-bottom { padding: 20px 0; }
        .copyright { color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 0; }
        .social-links-footer { display: flex; gap: 1rem; justify-content: flex-end; }
        .social-link { color: rgba(255, 255, 255, 0.6); font-size: 1.2rem; transition: all 0.3s ease; }
        @media (max-width: 768px) {
          .footer-main { padding: 40px 0; }
          .footer-title { text-align: center; }
          .footer-title::after { left: 50%; transform: translateX(-50%); }
          .footer-links { text-align: center; }
          .contact-info li { justify-content: center; }
          .social-links-footer { justify-content: center; margin-top: 1rem; }
          .copyright { text-align: center; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
