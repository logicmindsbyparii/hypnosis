// // components/EmotionalPain.jsx - CORRECTED
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { 
//   FaClock, 
//   FaArrowRight
// } from "react-icons/fa";
// import { 
//   GiBrokenHeart, 
//   GiThink,
//   GiHeartWings,
//   GiPsychicWaves,
//   GiNightSleep,
//   GiThreeFriends
// } from "react-icons/gi";
// import "../styles/EmotionalPain.css";

// const EmotionalPain = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // ✅ Call useTransform directly at top level, NOT inside useMemo
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   const pains = [ // No need for useMemo here unless you have performance issues
//     {
//       id: 1,
//       icon: <GiBrokenHeart aria-hidden="true" />,
//       title: "Addiction",
//       desc: "Feeling trapped in patterns you can't break? Whether it's substances, behaviors, or habits, addiction creates a cycle of shame and helplessness.",
//       color: "#7B4BFF",
//       stats: "1 in 7 people struggle with addiction"
//     },
//     {
//       id: 2,
//       icon: <GiThink aria-hidden="true" />,
//       title: "Anxiety",
//       desc: "Constant worry, racing thoughts, and physical tension that won't go away. Anxiety keeps you stuck in fight-or-flight mode.",
//       color: "#55C6F7",
//       stats: "40 million adults affected by anxiety"
//     },
//     {
//       id: 3,
//       icon: <GiHeartWings aria-hidden="true" />,
//       title: "Depression",
//       desc: "The weight of emptiness, loss of joy, and feeling disconnected from life and loved ones. Depression clouds every moment.",
//       color: "#1F5F8B",
//       stats: "280 million people worldwide"
//     },
//     {
//       id: 4,
//       icon: <GiPsychicWaves aria-hidden="true" />,
//       title: "Trauma",
//       desc: "Past experiences that still haunt your present. Trauma lives in the body and subconscious, affecting your daily life.",
//       color: "#7B4BFF",
//       stats: "70% of adults experience trauma"
//     },
//     {
//       id: 5,
//       icon: <GiNightSleep aria-hidden="true" />,
//       title: "Burnout",
//       desc: "Exhaustion that sleep can't fix. The feeling of being overwhelmed, depleted, and emotionally drained.",
//       color: "#55C6F7",
//       stats: "77% experience burnout at work"
//     },
//     {
//       id: 6,
//       icon: <GiThreeFriends aria-hidden="true" />,
//       title: "Relationship Issues",
//       desc: "Patterns of conflict, trust issues, and emotional disconnection that repeat in every relationship.",
//       color: "#1F5F8B",
//       stats: "65% of couples face recurring issues"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.43, 0.13, 0.23, 0.96]
//       }
//     }
//   };

//   const handleCTAClick = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section 
//       ref={containerRef} 
//       className="pain-section section-padding"
//       aria-label="Understanding emotional struggles"
//     >
//       {/* Background Pattern */}
//       <motion.div 
//         className="pain-bg-pattern" 
//         style={{ y }}
//         aria-hidden="true"
//       />
      
//       <div className="container">
//         {/* Section Header */}
//         <motion.div
//           className="section-header text-center"
//           style={{ opacity }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="section-badge">You Are Not Alone</span>
//           <h2 className="section-title">
//             Understanding Your <span className="gradient-text">Pain</span>
//           </h2>
//           <p className="section-subtitle">
//             These struggles are real, but they don't have to define you. 
//             Thousands have walked this path and found their way to healing.
//           </p>
//         </motion.div>

//         {/* Pain Grid */}
//         <motion.div 
//           className="row g-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {pains.map((pain) => (
//             <motion.div 
//               key={pain.id}
//               className="col-md-6 col-lg-4"
//               variants={itemVariants}
//             >
//               <motion.div 
//                 className="pain-card h-100"
//                 whileHover={{ y: -10 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 role="article"
//               >
//                 <div className="pain-card-inner">
//                   {/* Icon */}
//                   <div 
//                     className="pain-icon-wrapper"
//                     style={{ backgroundColor: `${pain.color}15` }}
//                   >
//                     <div 
//                       className="pain-icon" 
//                       style={{ color: pain.color }}
//                       aria-hidden="true"
//                     >
//                       {pain.icon}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <h3 className="pain-title">{pain.title}</h3>
//                   <p className="pain-description">{pain.desc}</p>

//                   {/* Stat */}
//                   <div 
//                     className="pain-stat"
//                     style={{ borderLeftColor: pain.color }}
//                   >
//                     <FaClock className="stat-icon-small" aria-hidden="true" />
//                     <span>{pain.stats}</span>
//                   </div>

//                   {/* Connect Link */}
//                   {/* <motion.button
//                     className="pain-link"
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleCTAClick}
//                     aria-label={`Find relief for ${pain.title}`}
//                   >
//                     Find Relief
//                     <FaArrowRight className="ms-2" aria-hidden="true" />
//                   </motion.button> */}
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Emotional Connection Banner */}
//         {/* <motion.div
//           className="pain-banner"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <div className="row align-items-center">
//             <div className="col-lg-8">
//               <h3 className="banner-title">
//                 You've Been Carrying This Weight Alone Long Enough
//               </h3>
//               <p className="banner-text">
//                 Healing doesn't mean you were broken. It means you're ready for change. 
//                 Your pain is valid, and so is your desire to be free from it.
//               </p>
//             </div>
//             <div className="col-lg-4 text-lg-end">
//               <motion.button
//                 className="btn-primary-gradient"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleCTAClick}
//                 aria-label="Start your healing journey"
//               >
//                 Start Your Healing Journey
//               </motion.button>
//             </div>
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default EmotionalPain;