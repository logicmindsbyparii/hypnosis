// components/Services.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FaBrain, 
  FaHeart, 
  FaUsers, 
  FaClock,
  FaArrowRight,
  FaStar,
  FaGem,
  FaLeaf,
  FaChild,
  FaHandsHelping
} from "react-icons/fa";
import { 
  GiBrokenHeart, 
  GiThink,
  GiLotus,
  GiSpiralShell,
  GiHealing,
  GiMeditation,
  GiFlowerStar,
  GiNightSleep
} from "react-icons/gi";
import { MdPsychology, MdEnergySavingsLeaf } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import "../styles/Services.css";

function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: <GiBrokenHeart />,
      title: "DE-ADDICTIONS",
      desc: "Break free from smoking, tobacco, gaming, sugar, and mobile addiction using powerful subconscious reprogramming.",
      longDesc: "Specialized hypnotherapy for various addictions including smoking, chewing tobacco, gaming addiction, sugar dependency, and mobile overuse.",
      features: ["Smoking Cessation", "Tobacco De-addiction", "Gaming Control", "Sugar Management", "Mobile Balance"],
      duration: "60-90 min",
      color: "#7B4BFF",
      category: "ADDICTION RECOVERY"
    },
    {
      icon: <GiThink />,
      title: "PHOBIAS",
      desc: "Overcome fears and phobias by reprogramming your subconscious mind's response to triggers.",
      longDesc: "Effective treatment for various phobias including fear of heights, flying, spiders, social situations, and more.",
      features: ["Fear of Heights", "Fear of Flying", "Social Phobia", "Animal Fears", "Situational Fears"],
      duration: "60-90 min",
      color: "#55C6F7",
      category: "ANXIETY TREATMENT"
    },
    {
      icon: <GiNightSleep />,
      title: "WEIGHT LOSS",
      desc: "Transform your relationship with food and achieve lasting weight loss through subconscious reprogramming.",
      longDesc: "Address emotional eating, cravings, and unhealthy patterns to achieve your ideal weight naturally.",
      features: ["Emotional Eating", "Craving Control", "Metabolism Boost", "Healthy Habits", "Body Image"],
      duration: "60 min",
      color: "#1F5F8B",
      category: "HEALTH & WELLNESS"
    },
    {
      icon: <FaHeart />,
      title: "DEPRESSION, ANXIETY",
      desc: "Heal emotional wounds, reduce stress, and regain control of your thoughts and feelings.",
      longDesc: "Comprehensive treatment for depression, anxiety, and emotional challenges using proven hypnotherapy techniques.",
      features: ["Depression Relief", "Anxiety Management", "Emotional Healing", "Stress Reduction", "Mood Balance"],
      duration: "60-90 min",
      color: "#7B4BFF",
      category: "MENTAL HEALTH"
    },
    {
      icon: <FaGem />,
      title: "LAW OF ATTRACTION",
      desc: "Manifest success, confidence, and abundance by reprogramming your subconscious mind.",
      longDesc: "Learn to harness the power of your subconscious to attract abundance, success, and meaningful relationships.",
      features: ["Manifestation", "Abundance Mindset", "Success Programming", "Visualization", "Wealth Consciousness"],
      duration: "60 min",
      color: "#55C6F7",
      category: "PERSONAL GROWTH"
    },
    {
      icon: <GiFlowerStar />,
      title: "HO'OPONOPONO",
      desc: "Heal emotional wounds and restore inner peace using ancient Hawaiian healing practices.",
      longDesc: "Experience the powerful Hawaiian practice of reconciliation and forgiveness to clear emotional blocks and restore harmony.",
      features: ["Emotional Cleansing", "Forgiveness", "Inner Peace", "Relationship Healing", "Self-Love"],
      duration: "60 min",
      color: "#1F5F8B",
      category: "SPIRITUAL HEALING"
    },
    {
      icon: <GiSpiralShell />,
      title: "KARMA & PAST LIFE REGRESSION",
      desc: "Explore deep subconscious memories and release karmic patterns affecting your life.",
      longDesc: "Journey into past lives to understand current life challenges, release karmic patterns, and accelerate spiritual growth.",
      features: ["Karmic Healing", "Soul Memory", "Spiritual Growth", "Pattern Release", "Life Purpose"],
      duration: "90 min",
      color: "#7B4BFF",
      category: "ADVANCED THERAPY"
    },
    {
      icon: <GiHealing />,
      title: "INNER CHILD TRAUMA",
      desc: "Heal childhood wounds and release emotional blocks stored in your subconscious.",
      longDesc: "Address and heal deep-seated emotional wounds from childhood that affect your current relationships and self-worth.",
      features: ["Childhood Healing", "Emotional Release", "Self-Love", "Trauma Recovery", "Inner Peace"],
      duration: "60-90 min",
      color: "#55C6F7",
      category: "TRAUMA HEALING"
    },
    {
      icon: <FaChild />,
      title: "RELATIONSHIP & PARENTING COUNSELLING",
      desc: "Support for family dynamics, resolving conflicts, and improving communication between partners, parents, and children.",
      longDesc: "Expert guidance for effective parenting, discipline strategies, and building strong parent-child relationships.",
      features: ["Family Dynamics", "Conflict Resolution", "Parenting Skills", "Child Development", "Family Harmony"],
      duration: "60 min",
      color: "#1F5F8B",
      category: "FAMILY WELLNESS"
    },
    {
      icon: <BiBrain />,
      title: "STUDENT COACH",
      desc: "Help students overcome academic challenges, improve focus, and build confidence.",
      longDesc: "Specialized coaching for students to improve focus, overcome exam anxiety, and achieve academic success.",
      features: ["Exam Anxiety", "Focus & Concentration", "Confidence Building", "Academic Success", "Study Habits"],
      duration: "60 min",
      color: "#7B4BFF",
      category: "STUDENT SUPPORT"
    },
    {
      icon: <MdPsychology />,
      title: "COUNSELLOR",
      desc: "Professional counselling services for various emotional and mental health challenges.",
      longDesc: "Comprehensive counselling to address emotional issues, life challenges, and personal growth.",
      features: ["Emotional Support", "Life Challenges", "Personal Growth", "Decision Making", "Goal Setting"],
      duration: "60 min",
      color: "#55C6F7",
      category: "COUNSELLING"
    },
    {
      icon: <MdEnergySavingsLeaf />,
      title: "ENERGY GUIDE",
      desc: "Balance your energy centers and promote overall well-being through energy healing.",
      longDesc: "Holistic energy healing to restore balance, remove blockages, and enhance your natural healing abilities.",
      features: ["Energy Balance", "Chakra Healing", "Vitality Boost", "Spiritual Alignment", "Aura Cleansing"],
      duration: "60 min",
      color: "#1F5F8B",
      category: "ENERGY WORK"
    },
  ];

  const serviceStats = [
    { icon: <FaClock />, value: "5000+", label: "Sessions Completed" },
    { icon: <FaStar />, value: "98%", label: "Success Rate" },
    { icon: <FaUsers />, value: "2000+", label: "Happy Clients" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="services-section section-padding position-relative overflow-hidden">
      {/* Background Elements */}
      <motion.div className="services-bg-pattern" style={{ y }} />
      
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Comprehensive Healing <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Each service is carefully designed to address specific needs while 
            promoting overall well-being and lasting transformation.
          </p>
        </motion.div>

        {/* Service Stats */}
        <motion.div 
          className="row g-4 mb-5 justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {serviceStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="col-md-4 col-6"
              whileHover={{ y: -5 }}
            >
              <div className="service-stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="service-card h-100"
              >
                <div className="service-card-inner">
                  {/* Category Badge */}
                  <span className="service-category" style={{ background: `${service.color}15`, color: service.color }}>
                    {service.category}
                  </span>

                  {/* Icon */}
                  <div className="service-icon-wrapper" style={{ background: `${service.color}15` }}>
                    <div className="service-icon" style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>

                  {/* Features */}
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FaStar className="feature-icon" style={{ color: service.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="service-duration">
                    <FaClock className="duration-icon" />
                    <span>Session: {service.duration}</span>
                  </div>

                  {/* Learn More Link */}
                  {/* <motion.a
                    href="#"
                    className="service-link"
                    whileHover={{ x: 5 }}
                    style={{ color: service.color }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn More
                    <FaArrowRight className="ms-2" />
                  </motion.a> */}

                  {/* Card Glow */}
                  <div className="card-glow" style={{ background: `radial-gradient(circle, ${service.color}20, transparent)` }} />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Service Packages */}
        {/* <motion.div 
          className="packages-section mt-5 pt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        > */}
          {/* <h3 className="text-center mb-4">Healing Packages</h3>
          <div className="row g-4">
            {[
              { name: "Starter Journey", sessions: 3, price: "₹9,999", saving: "Save 15%" },
              { name: "Transformation Path", sessions: 6, price: "₹18,999", saving: "Save 20%" },
              { name: "Complete Healing", sessions: 12, price: "₹34,999", saving: "Save 25%" },
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                className="col-md-4"
                whileHover={{ y: -10 }}
              >
                <div className="package-card">
                  <h4 className="package-name">{pkg.name}</h4>
                  <div className="package-sessions">{pkg.sessions} Sessions</div>
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-saving">{pkg.saving}</div>
                  <button className="package-btn">Choose Package</button>
                </div>
              </motion.div>
            ))}
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}

export default Services;