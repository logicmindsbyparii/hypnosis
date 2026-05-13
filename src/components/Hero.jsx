// components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import ParticlesBg from "./ParticlesBg";
import "../styles/hero.css";

// Ensure the path to your image is correct
import homeImg from "../assets/images/homeimg.jpg";

function Hero() {
  return (
    <section className="hero-section">
      {/* Visual background elements */}
      <ParticlesBg />
      
      <div className="container hero-container">
        {/* justify-content-center ensures columns stay centered on mobile */}
        <div className="row align-items-center justify-content-center g-5">
          
          {/* ── IMAGE COLUMN (Top on Mobile, Right on Desktop) ── */}
          <div className="col-lg-6 col-md-10 order-1 order-lg-2">
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img 
                src={homeImg} 
                alt="Hypnotherapy Session Illustration" 
                className="hero-main-img"
              />
            </motion.div>
          </div>

          {/* ── TEXT COLUMN (Bottom on Mobile, Left on Desktop) ── */}
          <div className="col-lg-6 col-md-10 order-2 order-lg-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hero-text-content"
            >
              <div className="trust-badge-wrapper">
                <span className="trust-badge">
                  <span className="badge-dot"></span>
                  Welcome to Inner Peace
                </span>
              </div>

              <h1 className="hero-title">
                Heal Your Mind.<br />
                <span className="gradient-text">Transform Your Life.</span>
              </h1>

              <p className="hero-subtitle">
                Hypnotherapy for addiction, depression, anxiety, and emotional healing 
                using proven subconscious techniques.
              </p>

              <div className="cta-wrapper">
                <Link to="cta" smooth={true} duration={500} offset={-80}>
                  <button className="btn-primary-gradient">
                    Book a Session <span>→</span>
                  </button>
                </Link>
                <Link to="services" smooth={true} duration={500} offset={-80}>
                  <button className="btn-outline-gradient">
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="scroll-indicator-wrapper">
         <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
         >
            <FaArrowDown className="scroll-arrow" />
         </motion.div>
      </div>
    </section>
  );
}

export default Hero;