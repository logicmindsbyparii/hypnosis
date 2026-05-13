// // components/TransformationJourney.jsx - CORRECTED
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { 
//   FaSeedling, 
//   FaTree, 
//   FaArrowRight,
//   FaStar,
//   FaHeart,
//   FaLeaf
// } from "react-icons/fa";
// import { GiPlantRoots, GiFlowerEmblem, GiLotus } from "react-icons/gi";
// import "../styles/TransformationJourney.css";

// const TransformationJourney = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // ✅ Call useTransform directly at top level
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
//   const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

//   const journeySteps = [
//     {
//       id: 1,
//       phase: "Phase 1: Awareness",
//       title: "Recognize the Patterns",
//       description: "The journey begins with understanding what's holding you back. We identify the subconscious patterns, beliefs, and traumas that are running your life.",
//       before: "Living on autopilot, repeating same patterns",
//       after: "Clear awareness of what needs to change",
//       icon: <FaSeedling aria-hidden="true" />,
//       color: "#7B4BFF"
//     },
//     {
//       id: 2,
//       phase: "Phase 2: Release",
//       title: "Let Go of What No Longer Serves You",
//       description: "Through guided hypnotherapy sessions, we access the subconscious mind to release emotional blocks, limiting beliefs, and stored trauma.",
//       before: "Carrying emotional weight, feeling stuck",
//       after: "Liberation from past burdens",
//       icon: <GiPlantRoots aria-hidden="true" />,
//       color: "#55C6F7"
//     },
//     {
//       id: 3,
//       phase: "Phase 3: Rewire",
//       title: "Reprogram Your Subconscious",
//       description: "We install new, empowering patterns and beliefs that align with your true desires. Your mind learns new ways of responding to life.",
//       before: "Negative self-talk, self-sabotage",
//       after: "Empowered mindset, confident actions",
//       icon: <FaTree aria-hidden="true" />,
//       color: "#1F5F8B"
//     },
//     {
//       id: 4,
//       phase: "Phase 4: Integrate",
//       title: "Embody Your New Reality",
//       description: "The changes become natural as you practice new responses. We ensure the transformation is fully integrated into your daily life.",
//       before: "Struggling to maintain change",
//       after: "New patterns feel automatic",
//       icon: <GiFlowerEmblem aria-hidden="true" />,
//       color: "#7B4BFF"
//     },
//     {
//       id: 5,
//       phase: "Phase 5: Flourish",
//       title: "Live Your Transformed Life",
//       description: "You're no longer defined by your past. You live with purpose, peace, and authentic joy, helping others on their journey.",
//       before: "Surviving, not thriving",
//       after: "Living fully, helping others",
//       icon: <GiLotus aria-hidden="true" />,
//       color: "#55C6F7"
//     }
//   ];

//   const beforeAfterStats = [
//     { id: 1, before: "Anxiety attacks", after: "Inner calm", improvement: "94%" },
//     { id: 2, before: "Addictive patterns", after: "Freedom & control", improvement: "89%" },
//     { id: 3, before: "Depression", after: "Joy & purpose", improvement: "92%" },
//     { id: 4, before: "Relationship conflict", after: "Deep connection", improvement: "87%" }
//   ];

//   const handleCTAClick = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section 
//       ref={containerRef} 
//       className="transformation-section section-padding"
//       aria-label="Your healing journey transformation path"
//     >
//       {/* Background Elements */}
//       <motion.div 
//         className="transformation-bg" 
//         style={{ scale }}
//         aria-hidden="true"
//       />
      
//       <div className="container">
//         {/* Section Header */}
//         <motion.div
//           className="section-header text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="section-badge">Your Healing Journey</span>
//           <h2 className="section-title">
//             From <span className="gradient-text">Pain to Freedom</span>
//           </h2>
//           <p className="section-subtitle">
//             A proven path that has guided thousands from suffering to lasting transformation.
//             Each step brings you closer to the life you deserve.
//           </p>
//         </motion.div>

//         {/* Before/After Stats */}
//         <motion.div 
//           className="row g-4 mb-5 stats-row"
//           style={{ y: y1 }}
//         >
//           {beforeAfterStats.map((stat) => (
//             <motion.div 
//               key={stat.id}
//               className="col-md-6 col-lg-3"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: stat.id * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="ba-card">
//                 <div className="ba-content">
//                   <div className="ba-before">
//                     <span className="ba-label">Before</span>
//                     <span className="ba-value">{stat.before}</span>
//                   </div>
//                   <FaArrowRight className="ba-arrow" aria-hidden="true" />
//                   <div className="ba-after">
//                     <span className="ba-label">After</span>
//                     <span className="ba-value">{stat.after}</span>
//                   </div>
//                 </div>
//                 <div className="ba-improvement">
//                   <FaStar className="improvement-icon" aria-hidden="true" />
//                   <span>{stat.improvement} success rate</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Journey Timeline */}
//         <div className="journey-timeline">
//           {journeySteps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               className="timeline-item"
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <div className="row align-items-center">
//                 <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
//                   <div className="timeline-content">
//                     <div 
//                       className="timeline-icon-wrapper" 
//                       style={{ backgroundColor: `${step.color}15` }}
//                     >
//                       <div 
//                         className="timeline-icon" 
//                         style={{ color: step.color }}
//                         aria-hidden="true"
//                       >
//                         {step.icon}
//                       </div>
//                     </div>
                    
//                     <span className="timeline-phase" style={{ color: step.color }}>
//                       {step.phase}
//                     </span>
                    
//                     <h3 className="timeline-title">{step.title}</h3>
//                     <p className="timeline-description">{step.description}</p>

//                     <div className="timeline-comparison">
//                       <div className="comparison-item before">
//                         <span className="comparison-label">Before</span>
//                         <p>{step.before}</p>
//                       </div>
//                       <div className="comparison-item after">
//                         <span className="comparison-label">After</span>
//                         <p>{step.after}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'}`}>
//                   <motion.div 
//                     className="timeline-visual"
//                     style={{ y: index % 2 === 0 ? y2 : y1 }}
//                   >
//                     <div 
//                       className="visual-circle" 
//                       style={{ background: `radial-gradient(circle, ${step.color}20, transparent)` }}
//                     >
//                       <motion.div
//                         animate={{
//                           scale: [1, 1.1, 1],
//                           rotate: [0, 180, 360],
//                         }}
//                         transition={{
//                           duration: 20,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                         aria-hidden="true"
//                       >
//                         {step.icon}
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Journey CTA */}
//         {/* <motion.div 
//           className="journey-cta text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <h3 className="cta-title">Ready to Begin Your Transformation?</h3>
//           <p className="cta-text">
//             Your journey to healing starts with a single step. Let's take it together.
//           </p>
//           <motion.button
//             className="btn-primary-gradient"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleCTAClick}
//             aria-label="Start your transformation journey today"
//           >
//             Start Your Journey Today
//             <FaHeart className="ms-2" aria-hidden="true" />
//           </motion.button>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default TransformationJourney;