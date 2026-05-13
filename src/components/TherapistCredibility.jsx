// components/TherapistCredibility.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {  
  FaStar, FaCertificate, FaHeart, FaQuoteRight, FaUsers, FaGem, FaChild, 
  FaHandsHelping, FaRegGrinStars
} from "react-icons/fa";
import {  
  GiHealing, GiLotus, GiSpiralShell, GiCircleSparks, GiFlowerStar
} from "react-icons/gi";
import { MdPsychology, MdEnergySavingsLeaf } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import "../styles/TherapistCredibility.css";

import therapistImage from "../assets/images/neha-kokra.jpeg";

function TherapistCredibility() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const credentials = [
    { icon: <FaCertificate />, title: "CLINICAL HYPNOTHERAPIST", color: "#7B4BFF" },
    { icon: <GiSpiralShell />, title: "PAST LIFE REGRESSION THERAPIST", color: "#55C6F7" },
    { icon: <FaHeart />, title: "INNER CHILD TRAUMA", color: "#1F5F8B" },
    { icon: <GiCircleSparks />, title: "KARMIC HEALER", color: "#7B4BFF" },
    { icon: <FaHandsHelping />, title: "RELATIONSHIP COUNSELLOR", color: "#55C6F7" },
    { icon: <FaChild />, title: "PARENTING GUIDE", color: "#1F5F8B" },
    { icon: <FaGem />, title: "LAW OF ATTRACTION GUIDE", color: "#7B4BFF" },
    { icon: <GiFlowerStar />, title: "HO'OPONOPONO TRAINER", color: "#55C6F7" },
    { icon: <MdPsychology />, title: "COUNSELLOR", color: "#1F5F8B" },
    { icon: <FaRegGrinStars />, title: "MANIFESTATION COACH", color: "#7B4BFF" },
    { icon: <BiBrain />, title: "STUDENT COACH", color: "#55C6F7" },
    { icon: <MdEnergySavingsLeaf />, title: "ENERGY GUIDE", color: "#1F5F8B" },
  ];

  // const specialities = [
  //   { number: "1]", title: "DE-ADDICTIONS", items: ["SMOKING", "CHEWING TOBACCO", "GAMING", "SUGAR", "MOBILE"] },
  //   { number: "2]", title: "PHOBIAS", items: [] },
  //   { number: "3]", title: "WEIGHT LOSS", items: [] },
  //   { number: "4]", title: "DEPRESSION, ANXIETY", items: [] }
  // ];

  return (
    <section ref={containerRef} className="therapist-section section-padding position-relative overflow-hidden">
      <motion.div className="therapist-bg" style={{ scale }} />

      <div className="container">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-badge">About</span>
        </motion.div>

        <div className="row g-5">
          {/* LEFT SIDE: Image and Stats (First on Mobile) */}
          <motion.div className="col-lg-5" style={{ y: y1 }}>
            <div className="therapist-photo-wrapper">
              <motion.div className="photo-backdrop" animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
              <img src={therapistImage} alt="Neha Kokra" className="therapist-photo" />
              <div className="stats-floating-badge">
                <div className="stat-badge-item">
                  <span className="stat-badge-icon"><FaUsers /></span>
                  <div><span className="stat-badge-value">2000+</span><span className="stat-badge-label">Depression Recovered</span></div>
                </div>
                <div className="stat-badge-item">
                  <span className="stat-badge-icon"><GiHealing /></span>
                  <div><span className="stat-badge-value">1300+</span><span className="stat-badge-label">Self-Transformation</span></div>
                </div>
                <div className="stat-badge-item">
                  <span className="stat-badge-icon"><FaStar /></span>
                  <div><span className="stat-badge-value">700+</span><span className="stat-badge-label">Addictions Overcome</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Text content (Immediately below Image on Mobile) */}
          <motion.div className="col-lg-7" style={{ y: y2 }}>
            <div className="therapist-intro">
              <h3 className="therapist-name">About NEHA KOKRA</h3>
              <div className="therapist-quote">
                <FaQuoteRight className="quote-icon" />
                <p>
                  "I believe that every individual possesses the inner wisdom and strength 
                  to heal themselves. My role is simply to guide you to unlock that potential 
                  and help you discover the peace and freedom you deserve."
                </p>
              </div>
              <p className="therapist-bio">
                Welcome to Hypnosis Solution, your trusted space for personal transformation, 
                healing, and empowerment through the science of hypnotherapy. I specialize in 
                guiding individuals toward positive change by tapping into the power of the 
                subconscious mind.
              </p>
            </div>

            <h4 className="section-subheading mt-5">Specializations</h4>
            <div className="credentials-list">
              <div className="row">
                <div className="col-6">
                  {credentials.slice(0, 6).map((cred, i) => (
                    <div key={i} className="credential-list-item">
                      <span className="credential-bullet" style={{ color: cred.color }}>✦</span>
                      <span className="credential-text">{cred.title}</span>
                    </div>
                  ))}
                </div>
                <div className="col-6">
                  {credentials.slice(6, 12).map((cred, i) => (
                    <div key={i} className="credential-list-item">
                      <span className="credential-bullet" style={{ color: cred.color }}>✦</span>
                      <span className="credential-text">{cred.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <h4 className="section-subheading mt-5">OUR SPECIALITIES</h4> */}
            <div className="specialities-container">
              {specialities.map((item, index) => (
                <div key={index} className="speciality-block mb-3">
                  <h5 className="speciality-title">{item.number} {item.title}</h5>
                  {item.items.length > 0 && (
                    <ul className="speciality-list">
                      {item.items.map((sub, si) => <li key={si}>• {sub}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TherapistCredibility;
