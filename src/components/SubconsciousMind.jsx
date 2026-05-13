// // components/SubconsciousMind.jsx
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { FaBrain, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";
// import { GiBrain, GiLotus } from "react-icons/gi";

// function SubconsciousMind() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   const concepts = [
//     {
//       icon: <FaBrain />,
//       title: "95% of Your Mind",
//       desc: "The subconscious mind controls 95% of your thoughts, feelings, and behaviors - without you even realizing it.",
//       color: "#7B4BFF"
//     },
//     {
//       icon: <GiBrain />,
//       title: "Deep Programming",
//       desc: "Childhood experiences, past traumas, and repeated thoughts create programs that run automatically.",
//       color: "#55C6F7"
//     },
//     {
//       icon: <FaLightbulb />,
//       title: "Conscious vs Subconscious",
//       desc: "Your conscious mind sets goals, but your subconscious either helps or sabotages based on its programming.",
//       color: "#1F5F8B"
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Protection Mechanism",
//       desc: "The subconscious seeks to protect you by keeping you in familiar patterns - even harmful ones.",
//       color: "#7B4BFF"
//     },
//   ];

//   return (
//     <section ref={containerRef} className="subconscious-section section-padding position-relative overflow-hidden">
//       {/* Background Elements */}
//       <motion.div className="brain-bg" style={{ rotate, scale }} />
      
//       <div className="container">
//         <div className="row align-items-center g-5">
//           {/* Left Column - Visual Representation */}
//           <motion.div 
//             className="col-lg-6"
//             style={{ y: y1 }}
//           >
//             <div className="visual-container">
//               {/* Animated Brain Diagram */}
//               <motion.div 
//                 className="brain-diagram"
//                 animate={{
//                   boxShadow: [
//                     "0 0 0 0 rgba(123, 75, 255, 0.3)",
//                     "0 0 0 20px rgba(123, 75, 255, 0)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <div className="brain-core">
//                   <GiBrain className="brain-icon" />
//                 </div>
                
//                 {/* Orbiting Elements */}
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <motion.div
//                     key={i}
//                     className={`orbit-circle orbit-${i}`}
//                     animate={{
//                       rotate: [0, 360],
//                     }}
//                     transition={{
//                       duration: 20 - i * 2,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     <div className="orbit-dot" style={{ background: i % 2 === 0 ? "#7B4BFF" : "#55C6F7" }} />
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Floating Labels */}
//               <motion.div 
//                 className="floating-label label-1"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//               >
//                 <span>Beliefs</span>
//               </motion.div>
              
//               <motion.div 
//                 className="floating-label label-2"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity }}
//               >
//                 <span>Habits</span>
//               </motion.div>
              
//               <motion.div 
//                 className="floating-label label-3"
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4.5, repeat: Infinity }}
//               >
//                 <span>Trauma</span>
//               </motion.div>
              
//               <motion.div 
//                 className="floating-label label-4"
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 5.5, repeat: Infinity }}
//               >
//                 <span>Patterns</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div 
//             className="col-lg-6"
//             style={{ y: y2 }}
//           >
//             <span className="section-badge">The Science of Healing</span>
            
//             <h2 className="section-title">
//               Understanding Your <span className="gradient-text">Subconscious Mind</span>
//             </h2>
            
//             <p className="lead text-secondary mb-4">
//               Your subconscious mind is like a powerful computer running programs 
//               installed throughout your life. Most of these programs were created 
//               without your conscious choice.
//             </p>

//             <p className="text-muted mb-5">
//               The good news? Just as these patterns were programmed, they can be 
//               reprogrammed. Hypnotherapy gives you direct access to rewrite the 
//               code that's been running your life.
//             </p>

//             {/* Concept Grid */}
//             <div className="row g-3">
//               {concepts.map((concept, index) => (
//                 <motion.div 
//                   key={index}
//                   className="col-sm-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div className="concept-card">
//                     <div className="concept-icon" style={{ color: concept.color }}>
//                       {concept.icon}
//                     </div>
//                     <h4 className="concept-title">{concept.title}</h4>
//                     <p className="concept-desc">{concept.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA */}
//             {/* <motion.div 
//               className="mt-4"
//               whileHover={{ scale: 1.02 }}
//             >
//               <button className="btn-link-custom">
//                 Learn How Hypnotherapy Reprograms the Subconscious
//                 <FaRocket className="ms-2" />
//               </button>
//             </motion.div> */}
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subconscious-section {
//           background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
//           position: relative;
//         }

//         .brain-bg {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 800px;
//           height: 800px;
//           background: radial-gradient(circle, rgba(123, 75, 255, 0.03) 0%, transparent 70%);
//           border-radius: 50%;
//           z-index: 0;
//         }

//         .visual-container {
//           position: relative;
//           height: 500px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .brain-diagram {
//           position: relative;
//           width: 300px;
//           height: 300px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .brain-core {
//           width: 150px;
//           height: 150px;
//           background: linear-gradient(135deg, #7B4BFF, #55C6F7);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 20px 40px rgba(123, 75, 255, 0.3);
//           position: relative;
//           z-index: 2;
//         }

//         .brain-icon {
//           font-size: 4rem;
//           color: white;
//         }

//         .orbit-circle {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           border: 1px dashed rgba(123, 75, 255, 0.3);
//           border-radius: 50%;
//         }

//         .orbit-1 {
//           width: 200px;
//           height: 200px;
//           margin-top: -100px;
//           margin-left: -100px;
//         }

//         .orbit-2 {
//           width: 250px;
//           height: 250px;
//           margin-top: -125px;
//           margin-left: -125px;
//         }

//         .orbit-3 {
//           width: 300px;
//           height: 300px;
//           margin-top: -150px;
//           margin-left: -150px;
//         }

//         .orbit-4 {
//           width: 350px;
//           height: 350px;
//           margin-top: -175px;
//           margin-left: -175px;
//         }

//         .orbit-5 {
//           width: 400px;
//           height: 400px;
//           margin-top: -200px;
//           margin-left: -200px;
//         }

//         .orbit-dot {
//           position: absolute;
//           top: -5px;
//           left: 50%;
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           transform: translateX(-50%);
//         }

//         .floating-label {
//           position: absolute;
//           background: white;
//           padding: 0.5rem 1.2rem;
//           border-radius: 50px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           font-weight: 600;
//           color: var(--primary);
//           border: 1px solid rgba(123, 75, 255, 0.2);
//           z-index: 3;
//         }

//         .label-1 {
//           top: 20%;
//           left: 10%;
//         }

//         .label-2 {
//           top: 60%;
//           right: 15%;
//         }

//         .label-3 {
//           bottom: 20%;
//           left: 20%;
//         }

//         .label-4 {
//           top: 40%;
//           right: 10%;
//         }

//         .concept-card {
//           background: white;
//           padding: 1.5rem;
//           border-radius: 16px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .concept-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(123, 75, 255, 0.1);
//           border-color: rgba(123, 75, 255, 0.2);
//         }

//         .concept-icon {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }

//         .concept-title {
//           font-size: 1.1rem;
//           font-weight: 700;
//           color: var(--primary);
//           margin-bottom: 0.5rem;
//         }

//         .concept-desc {
//           font-size: 0.9rem;
//           color: #666;
//           line-height: 1.5;
//           margin-bottom: 0;
//         }

//         .btn-link-custom {
//           background: none;
//           border: none;
//           color: var(--accent-purple);
//           font-weight: 600;
//           font-size: 1.1rem;
//           cursor: pointer;
//           padding: 0;
//           transition: all 0.3s ease;
//           display: inline-flex;
//           align-items: center;
//         }

//         .btn-link-custom:hover {
//           color: var(--accent-cyan);
//           transform: translateX(5px);
//         }

//         @media (max-width: 768px) {
//           .visual-container {
//             height: 400px;
//           }
          
//           .brain-core {
//             width: 120px;
//             height: 120px;
//           }
          
//           .brain-icon {
//             font-size: 3rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default SubconsciousMind;