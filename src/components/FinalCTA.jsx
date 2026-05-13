
// // components/FinalCTA.jsx - Merged with Contact Section
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState } from "react";
// import { GiLotus } from "react-icons/gi";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaClock,
//   FaUser,
//   FaComment,
//   FaPaperPlane,
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaYoutube,
//   FaCheckCircle,
// } from "react-icons/fa";

// function FinalCTA() {
//   const containerRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState("idle");

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus("submitting");
//     setTimeout(() => {
//       setFormStatus("success");
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setTimeout(() => setFormStatus("idle"), 5000);
//     }, 1500);
//   };

//   const contactInfo = [
//     {
//       icon: <FaPhone />,
//       title: "Call Us",
//       details: "+91 98256 00779",
//       sub: "Mon-Sat, 9am-8pm",
//       action: "tel:+919825600779",
//       color: "#7B4BFF",
//     },
//     {
//       icon: <FaEnvelope />,
//       title: "Email Us",
//       details: "nehakokra2@yahoo.com",
//       sub: "24/7 Support Available",
//       action: "mailto:nehakokra2@yahoo.com",
//       color: "#55C6F7",
//     },
//     {
//       icon: <FaWhatsapp />,
//       title: "WhatsApp",
//       details: "+91 98256 00779",
//       sub: "Quick Response",
//       action: "https://wa.me/919825600779",
//       color: "#25D366",
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Visit Us",
//       details: "Surat, Gujarat",
//       sub: "Online Sessions Worldwide",
//       action: "#",
//       color: "#1F5F8B",
//     },
//   ];

//   const services = [
//     "Select a Service",
//     "Hypnotherapy",
//     "Addiction & Depression",
//     "Law of Attraction",
//     "Ho'oponopono",
//     "Past Life Regression",
//     "Relationship & Parenting",
//   ];

//   return (
//     <section
//       ref={containerRef}
//       className="final-cta-section section-padding position-relative overflow-hidden"
//     >
//       {/* ✅ Same background as contact page */}
//       <motion.div className="contact-bg" style={{ y }} />

//       <div className="container">

//         {/* ✅ ONLY Lotus Animation kept - all other CTA content removed */}
//         <div className="text-center mb-5">
//           <motion.div
//             className="lotus-icon"
//             animate={{
//               rotate: [0, 360],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             <GiLotus />
//           </motion.div>

//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-badge">Get in Touch</span>
//             <h2 className="section-title">
//               Begin Your <span className="gradient-text">Healing Journey</span>
//             </h2>
//             <p className="section-subtitle">
//               Take the first step towards transformation. Reach out to us for a
//               free consultation or to learn more about our services.
//             </p>
//           </motion.div>
//         </div>

//         {/* ✅ Full Contact Section merged here */}
//         <div className="row g-5">

//           {/* Left Column */}
//           <motion.div
//             className="col-lg-5"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             {/* Contact Cards */}
//             <div className="row g-3 mb-4">
//               {contactInfo.map((info, index) => (
//                 <div className="col-md-6" key={index}>
//                   <motion.a
//                     href={info.action}
//                     className="contact-info-card"
//                     whileHover={{
//                       y: -5,
//                       boxShadow: "0 20px 40px rgba(123, 75, 255, 0.15)",
//                     }}
//                     target={info.action.startsWith("http") ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                   >
//                     <div className="info-icon" style={{ color: info.color }}>
//                       {info.icon}
//                     </div>
//                     <h4 className="info-title">{info.title}</h4>
//                     <p className="info-details">{info.details}</p>
//                     <p className="info-sub">{info.sub}</p>
//                   </motion.a>
//                 </div>
//               ))}
//             </div>

//             {/* Map */}
//             {/* <div className="map-container">
//               <iframe
//                 src="https://maps.google.com/maps?q=1029+Avadh+Kontina+Opp+Luthara+Circle+VIP+Road+Vesu+Surat+Gujarat+395007&output=embed"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0, borderRadius: "20px" }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location Map"
//               />
//             </div> */}

// {/* 1029, avadh kontina, opp. luthara cir, vip road, vesu, 395007 */}
//             {/* Social Links */}
//             <div className="social-links mt-4">
//               <h4 className="social-title">Connect With Us</h4>
//               <div className="social-icons">
//                 <motion.a
//                   href="https://www.instagram.com/hypnosis_solutions/"
//                   className="social-icon"
//                   whileHover={{ y: -5, backgroundColor: "#7B4BFF", color: "white" }}
//                   target="_blank" rel="noopener noreferrer"
//                 >
//                   <FaInstagram />
//                 </motion.a>
//                 <motion.a
//                   href="https://www.facebook.com/hypnosissolutions1/"
//                   className="social-icon"
//                   whileHover={{ y: -5, backgroundColor: "#55C6F7", color: "white" }}
//                   target="_blank" rel="noopener noreferrer"
//                 >
//                   <FaFacebook />
//                 </motion.a>
//                 <motion.a
//                   href="https://wa.me/919825600779"
//                   className="social-icon"
//                   whileHover={{ y: -5, backgroundColor: "#25D366", color: "white" }}
//                   target="_blank" rel="noopener noreferrer"
//                 >
//                   <FaWhatsapp />
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Contact Form */}
//           <motion.div
//             className="col-lg-7"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="contact-form-card">
//               <h3 className="form-title">Send Us a Message</h3>
//               <p className="form-subtitle">
//                 We'll get back to you within 24 hours to schedule your free
//                 consultation.
//               </p>

//               <form onSubmit={handleSubmit}>
//                 <div className="row g-4">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="name">
//                         <FaUser className="form-icon" /> Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter your full name"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="email">
//                         <FaEnvelope className="form-icon" /> Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="phone">
//                         <FaPhone className="form-icon" /> Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+91 98256 00779"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="service">
//                         <FaClock className="form-icon" /> Service Interested In
//                       </label>
//                       <select
//                         className="form-control"
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                       >
//                         {services.map((service, index) => (
//                           <option key={index} value={service}>
//                             {service}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="col-12">
//                     <div className="form-group">
//                       <label htmlFor="message">
//                         <FaComment className="form-icon" /> Your Message *
//                       </label>
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         name="message"
//                         rows="5"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         placeholder="Tell us about what you'd like help with..."
//                       />
//                     </div>
//                   </div>

//                   <div className="col-12">
//                     <motion.button
//                       type="submit"
//                       className="submit-btn"
//                       disabled={formStatus === "submitting"}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       {formStatus === "submitting" ? (
//                         <><span className="spinner"></span>Sending...</>
//                       ) : formStatus === "success" ? (
//                         <><FaCheckCircle className="me-2" />Message Sent Successfully!</>
//                       ) : (
//                         <>Send Message<FaPaperPlane className="ms-2" /></>
//                       )}
//                     </motion.button>
//                   </div>
//                 </div>
//               </form>

//               <div className="response-guarantee">
//                 <FaClock className="guarantee-icon" />
//                 <div>
//                   <h5>24-Hour Response Guarantee</h5>
//                   <p>We value your time and will respond within 24 hours.</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         .final-cta-section {
//           /* ✅ Same background as Contact page */
//           background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
//           position: relative;
//           color: inherit;
//         }

//         .contact-bg {
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background-image:
//             radial-gradient(circle at 20% 30%, rgba(123, 75, 255, 0.03) 0%, transparent 40%),
//             radial-gradient(circle at 80% 70%, rgba(85, 198, 247, 0.03) 0%, transparent 40%);
//           pointer-events: none;
//         }

//         /* ✅ Lotus animation - kept exactly as original */
//         .lotus-icon {
//           font-size: 5rem;
//           color: rgba(123, 75, 255, 0.25);
//           margin-bottom: 1.5rem;
//           display: inline-block;
//         }

//         .contact-info-card {
//           display: block;
//           background: white;
//           padding: 1.5rem;
//           border-radius: 20px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           transition: all 0.3s ease;
//           text-decoration: none;
//           color: inherit;
//           height: 100%;
//         }

//         .info-icon { font-size: 2rem; margin-bottom: 1rem; }
//         .info-title { font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: 0.3rem; }
//         .info-details { font-size: 0.9rem; color: #666; margin-bottom: 0.2rem; }
//         .info-sub { font-size: 0.8rem; color: #999; margin: 0; }

//         // .map-container {
//         //   border-radius: 20px;
//         //   overflow: hidden;
//         //   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         //   border: 1px solid rgba(123, 75, 255, 0.1);
//         // }

//         .social-title { font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: 1rem; }
//         .social-icons { display: flex; gap: 1rem; }
//         .social-icon {
//           width: 45px; height: 45px;
//           border-radius: 50%;
//           background: white;
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           display: flex; align-items: center; justify-content: center;
//           color: var(--primary);
//           font-size: 1.2rem;
//           transition: all 0.3s ease;
//           text-decoration: none;
//         }

//         .contact-form-card {
//           background: white;
//           padding: 3rem;
//           border-radius: 40px;
//           box-shadow: 0 30px 70px rgba(123, 75, 255, 0.1);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//         }

//         .form-title { font-size: 2rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; }
//         .form-subtitle { color: #666; margin-bottom: 2rem; }

//         .form-group { margin-bottom: 0; }
//         .form-group label {
//           display: flex; align-items: center; gap: 8px;
//           margin-bottom: 0.5rem;
//           color: var(--primary); font-weight: 500;
//         }
//         .form-icon { color: var(--accent-purple); }

//         .form-control {
//           width: 100%;
//           padding: 0.8rem 1.2rem;
//           border: 1px solid rgba(123, 75, 255, 0.2);
//           border-radius: 16px;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//           background: #f8f9fa;
//         }
//         .form-control:focus {
//           outline: none;
//           border-color: var(--accent-purple);
//           box-shadow: 0 0 0 3px rgba(123, 75, 255, 0.1);
//           background: white;
//         }
//         textarea.form-control { resize: vertical; min-height: 120px; }
//         select.form-control {
//           appearance: none;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237B4BFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: right 1rem center;
//           background-size: 1rem;
//         }

//         .submit-btn {
//           width: 100%;
//           padding: 1rem;
//           background: linear-gradient(135deg, #7B4BFF, #55C6F7);
//           color: white;
//           border: none;
//           border-radius: 16px;
//           font-weight: 600;
//           font-size: 1.1rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }
//         .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

//         .spinner {
//           width: 20px; height: 20px;
//           border: 2px solid rgba(255,255,255,0.3);
//           border-top-color: white;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           margin-right: 0.5rem;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }

//         .response-guarantee {
//           display: flex; align-items: center; gap: 1rem;
//           margin-top: 2rem; padding: 1rem;
//           background: #f0f8ff;
//           border-radius: 16px;
//           border-left: 3px solid var(--accent-purple);
//         }
//         .guarantee-icon { font-size: 2rem; color: var(--accent-purple); }
//         .response-guarantee h5 { font-size: 1rem; font-weight: 600; color: var(--primary); margin-bottom: 0.2rem; }
//         .response-guarantee p { font-size: 0.9rem; color: #666; margin: 0; }

//         @media (max-width: 768px) {
//           .contact-form-card { padding: 2rem; }
//           .form-title { font-size: 1.5rem; }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default FinalCTA;

// components/FinalCTA.jsx - Cleaned version with only Contact Info
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GiLotus } from "react-icons/gi";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function FinalCTA() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+91 98256 00779",
      sub: "Mon-Sat, 9am-8pm",
      action: "tel:+919825600779",
      color: "#7B4BFF",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "nehakokra2@yahoo.com",
      sub: "24/7 Support Available",
      action: "mailto:nehakokra2@yahoo.com",
      color: "#55C6F7",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: "+91 98256 00779",
      sub: "Quick Response",
      action: "https://wa.me/919825600779",
      color: "#25D366",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "Surat, Gujarat",
      sub: "Online Sessions Worldwide",
      action: "#",
      color: "#1F5F8B",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="final-cta-section section-padding position-relative overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div className="contact-bg" style={{ y }} />

      <div className="container">
        <div className="text-center mb-5">
          {/* Animated Lotus Icon */}
          <motion.div
            className="lotus-icon"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <GiLotus />
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">
              Begin Your <span className="gradient-text">Healing Journey</span>
            </h2>
            <p className="section-subtitle">
              Take the first step towards transformation. Reach out to us for a
              free consultation.
            </p>
          </motion.div>
        </div>

        {/* Centered Contact Cards Row */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row g-4 justify-content-center">
              {contactInfo.map((info, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <motion.a
                    href={info.action}
                    className="contact-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(123, 75, 255, 0.15)" }}
                    target={info.action.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <div className="info-icon" style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <h4 className="info-title">{info.title}</h4>
                    <p className="info-details">{info.details}</p>
                    <p className="info-sub">{info.sub}</p>
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Centered Social Links */}
            <div className="text-center mt-5">
              <h4 className="social-title">Connect With Us</h4>
              <div className="social-icons-row">
                {[
                  { icon: <FaInstagram />, color: "#E4405F", link: "https://www.instagram.com/hypnosis_solutions/" },
                  { icon: <FaFacebook />, color: "#1877F2", link: "https://www.facebook.com/hypnosissolutions1/" },
                  { icon: <FaWhatsapp />, color: "#25D366", link: "https://wa.me/919825600779" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    className="social-circle"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: social.color, color: "white" }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .final-cta-section { 
          background: #ffffff; 
          padding: 100px 0; 
          position: relative;
        }
        .contact-bg {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(123, 75, 255, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(123, 75, 255, 0.03) 0%, transparent 40%);
          pointer-events: none;
        }
        .lotus-icon {
          font-size: 5rem;
          color: rgba(123, 75, 255, 0.25);
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        .contact-info-card {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          background: white; padding: 30px 20px; border-radius: 24px;
          border: 1px solid rgba(123, 75, 255, 0.1); text-decoration: none; color: inherit; height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); transition: all 0.3s ease;
        }
        .info-icon { font-size: 2.2rem; margin-bottom: 15px; }
        .info-title { font-size: 1.2rem; font-weight: 700; color: #0F2A44; margin-bottom: 8px; }
        .info-details { font-size: 0.95rem; color: #444; font-weight: 500; }
        .info-sub { font-size: 0.85rem; color: #888; }
        .social-title { font-size: 1.2rem; font-weight: 700; color: #0F2A44; margin-bottom: 20px; }
        .social-icons-row { display: flex; gap: 15px; justify-content: center; }
        .social-circle {
          width: 50px; height: 50px; border-radius: 50%; background: #f8f9fa;
          display: flex; align-items: center; justify-content: center;
          color: #0F2A44; font-size: 1.3rem; transition: all 0.3s ease; text-decoration: none;
          border: 1px solid rgba(123, 75, 255, 0.1);
        }
      `}</style>
    </section>
  );
}

export default FinalCTA;