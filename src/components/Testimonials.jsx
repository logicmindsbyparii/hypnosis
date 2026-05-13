// // components/Testimonials.jsx
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useState } from "react";
// import { 
//   FaQuoteLeft, 
//   FaStar, 
//   FaArrowLeft, 
//   FaArrowRight,
//   FaPlay,
//   FaPause
// } from "react-icons/fa";
// import { IoMdQuote } from "react-icons/io";

// const testimonials = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     location: "Mumbai",
//     image: "https://images.unsplash.com/photo-1494790108777-2fd3f0a8f9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "I struggled with anxiety for over a decade. After just 3 sessions of hypnotherapy, I feel like a different person. The constant worry in my mind has finally quieted down. I can breathe again.",
//     rating: 5,
//     service: "Anxiety Relief",
//     videoAvailable: true,
//     date: "2024"
//   },
//   {
//     id: 2,
//     name: "Rahul Mehta",
//     location: "Delhi",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "Past life regression was an eye-opening experience. It helped me understand recurring patterns in my relationships. The healing has been profound and lasting.",
//     rating: 5,
//     service: "Past Life Regression",
//     videoAvailable: false,
//     date: "2023"
//   },
//   {
//     id: 3,
//     name: "Anjali Desai",
//     location: "Bangalore",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The addiction therapy program changed my life. I had tried everything else, but nothing worked until I addressed the subconscious roots. 2 years sober and counting!",
//     rating: 5,
//     service: "Addiction Recovery",
//     videoAvailable: true,
//     date: "2024"
//   },
//   {
//     id: 4,
//     name: "Vikram Singh",
//     location: "Pune",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The Law of Attraction guidance helped me manifest my dream job and improve my relationship. The techniques are practical and actually work!",
//     rating: 5,
//     service: "Law of Attraction",
//     videoAvailable: false,
//     date: "2023"
//   },
//   {
//     id: 5,
//     name: "Neha Gupta",
//     location: "Chennai",
//     image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "Ho'oponopono healing helped me forgive and release past hurts. I finally feel at peace with myself and my relationships have transformed.",
//     rating: 5,
//     service: "Ho'oponopono",
//     videoAvailable: true,
//     date: "2024"
//   },
//   {
//     id: 6,
//     name: "Arjun Nair",
//     location: "Kochi",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The parenting counselling sessions gave me tools I never knew existed. My relationship with my teenager has completely transformed.",
//     rating: 5,
//     service: "Parenting Counselling",
//     videoAvailable: false,
//     date: "2023"
//   },
// ];

// function Testimonials() {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);
//   const [selectedVideo, setSelectedVideo] = useState(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Autoplay
//   useState(() => {
//     if (!autoplay) return;
//     const interval = setInterval(nextTestimonial, 5000);
//     return () => clearInterval(interval);
//   }, [autoplay, currentIndex]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//     <section ref={containerRef} className="testimonials-section section-padding position-relative overflow-hidden">
//       {/* Background Elements */}
//       <motion.div className="testimonials-bg" style={{ y }} />
      
//       <div className="container">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-5"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="section-badge">Client Stories</span>
//           <h2 className="section-title">
//             Real Stories of <span className="gradient-text">Transformation</span>
//           </h2>
//           <p className="section-subtitle">
//             Hear from those who've walked the path and found their way to healing.
//             Their stories are proof that change is possible.
//           </p>
//         </motion.div>

//         {/* Main Testimonial Slider */}
//         <div className="testimonial-slider">
//           <div className="row align-items-center">
//             <div className="col-lg-8 mx-auto">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="testimonial-card-main"
//                 >
//                   {/* Quote Icon */}
//                   <IoMdQuote className="main-quote-icon" />

//                   <div className="testimonial-content">
//                     <div className="testimonial-header">
//                       <img 
//                         src={testimonials[currentIndex].image} 
//                         alt={testimonials[currentIndex].name}
//                         className="testimonial-image"
//                       />
//                       <div className="testimonial-info">
//                         <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
//                         <p className="testimonial-location">{testimonials[currentIndex].location}</p>
//                         <div className="testimonial-rating">
//                           {[...Array(5)].map((_, i) => (
//                             <FaStar key={i} className="star-icon filled" />
//                           ))}
//                         </div>
//                       </div>
//                       {testimonials[currentIndex].videoAvailable && (
//                         <motion.button
//                           className="video-btn"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => setSelectedVideo(testimonials[currentIndex])}
//                         >
//                           <FaPlay />
//                           {/* <span>Watch Video</span> */}
//                         </motion.button>
//                       )}
//                     </div>

//                     <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>

//                     <div className="testimonial-footer">
//                       <span className="testimonial-service">
//                         Service: {testimonials[currentIndex].service}
//                       </span>
//                       <span className="testimonial-date">{testimonials[currentIndex].date}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Slider Controls */}
//               <div className="slider-controls">
//                 <motion.button
//                   className="control-btn"
//                   onClick={prevTestimonial}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <FaArrowLeft />
//                 </motion.button>

//                 <div className="slider-dots">
//                   {testimonials.map((_, index) => (
//                     <motion.span
//                       key={index}
//                       className={`dot ${index === currentIndex ? 'active' : ''}`}
//                       onClick={() => setCurrentIndex(index)}
//                       whileHover={{ scale: 1.2 }}
//                     />
//                   ))}
//                 </div>

//                 <motion.button
//                   className="control-btn"
//                   onClick={nextTestimonial}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <FaArrowRight />
//                 </motion.button>
//               </div>
//               {/* Autoplay Toggle */}
//               {/* <motion.button
//                 className="autoplay-btn"
//                 onClick={() => setAutoplay(!autoplay)}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {autoplay ? <FaPause /> : <FaPlay />}
//                 <span>{autoplay ? 'Pause' : 'Play'} Autoplay</span>
//               </motion.button> */}
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Grid */}
//         <motion.div 
//           className="testimonial-grid mt-5 pt-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h3 className="text-center mb-4">More Success Stories</h3>
//           <div className="row g-4">
//             {testimonials.slice(0, 3).map((testimonial, index) => (
//               <motion.div 
//                 key={testimonial.id}
//                 className="col-md-4"
//                 variants={itemVariants}
//               >
//                 <div className="testimonial-card-mini">
//                   <FaQuoteLeft className="mini-quote" />
//                   <p className="mini-text">"{testimonial.text.substring(0, 100)}..."</p>
//                   <div className="mini-footer">
//                     <img src={testimonial.image} alt={testimonial.name} className="mini-image" />
//                     <div>
//                       <h4 className="mini-name">{testimonial.name}</h4>
//                       <p className="mini-service">{testimonial.service}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stats Banner */}
//         <motion.div 
//           className="stats-banner mt-5"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">5000+</div>
//                 <div className="stat-label">Happy Clients</div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">98%</div>
//                 <div className="stat-label">Success Rate</div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">15+</div>
//                 <div className="stat-label">Years Experience</div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             className="video-modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedVideo(null)}
//           >
//             {/* <motion.div
//               className="modal-content"
//               initial={{ scale: 0.8, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.8, y: 50 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button className="close-modal" onClick={() => setSelectedVideo(null)}>×</button>
//               <div className="video-placeholder">
//                 <FaPlay className="play-icon" />
//                 <p>Video testimonial from {selectedVideo.name}</p>
//                 <small>(Demo - Video would play here)</small>
//               </div>
//             </motion.div> */}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .testimonials-section {
//           background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
//           position: relative;
//         }

//         .testimonials-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-image: 
//             radial-gradient(circle at 80% 20%, rgba(123, 75, 255, 0.05) 0%, transparent 40%),
//             radial-gradient(circle at 20% 80%, rgba(85, 198, 247, 0.05) 0%, transparent 40%);
//           pointer-events: none;
//         }

//         .testimonial-slider {
//           position: relative;
//           padding: 2rem 0;
//         }

//         .testimonial-card-main {
//           background: white;
//           padding: 3rem;
//           border-radius: 40px;
//           box-shadow: 0 30px 70px rgba(123, 75, 255, 0.15);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .main-quote-icon {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           font-size: 6rem;
//           color: rgba(123, 75, 255, 0.1);
//           z-index: 1;
//         }

//         .testimonial-content {
//           position: relative;
//           z-index: 2;
//         }

//         .testimonial-header {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//           flex-wrap: wrap;
//         }

//         .testimonial-image {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 3px solid var(--accent-purple);
//         }

//         .testimonial-info {
//           flex: 1;
//         }

//         .testimonial-name {
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: var(--primary);
//           margin-bottom: 0.2rem;
//         }

//         .testimonial-location {
//           color: #666;
//           font-size: 0.9rem;
//           margin-bottom: 0.3rem;
//         }

//         .testimonial-rating {
//           display: flex;
//           gap: 3px;
//         }

//         .star-icon {
//           color: #ddd;
//           font-size: 0.9rem;
//         }

//         .star-icon.filled {
//           color: #FFD700;
//         }

//         // .video-btn {
//         //   display: flex;
//         //   align-items: center;
//         //   gap: 8px;
//         //   padding: 0.5rem 1.2rem;
//         //   background: linear-gradient(135deg, #7B4BFF, #55C6F7);
//         //   color: white;
//         //   border: none;
//         //   border-radius: 50px;
//         //   font-size: 0.9rem;
//         //   cursor: pointer;
//         //   transition: all 0.3s ease;
//         // }

//         .testimonial-text {
//           font-size: 1.2rem;
//           line-height: 1.6;
//           color: #444;
//           margin-bottom: 2rem;
//           font-style: italic;
//           position: relative;
//           padding-left: 1rem;
//           border-left: 3px solid var(--accent-purple);
//         }

//         .testimonial-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           color: #666;
//           font-size: 0.9rem;
//           padding-top: 1rem;
//           border-top: 1px solid #eee;
//         }

//         .testimonial-service {
//           color: var(--accent-purple);
//           font-weight: 600;
//         }

//         .slider-controls {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           margin-top: 2rem;
//         }

//         .control-btn {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           border: 1px solid rgba(123, 75, 255, 0.2);
//           background: white;
//           color: var(--accent-purple);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .control-btn:hover {
//           background: var(--accent-purple);
//           color: white;
//           border-color: var(--accent-purple);
//         }

//         .slider-dots {
//           display: flex;
//           gap: 10px;
//         }

//         .dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: #ddd;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .dot.active {
//           width: 30px;
//           border-radius: 10px;
//           background: var(--accent-purple);
//         }

//         .autoplay-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin: 1rem auto 0;
//           padding: 0.5rem 1.5rem;
//           background: none;
//           border: 1px solid rgba(123, 75, 255, 0.2);
//           border-radius: 50px;
//           color: var(--primary);
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .autoplay-btn:hover {
//           background: rgba(123, 75, 255, 0.05);
//         }

//         .testimonial-card-mini {
//           background: white;
//           padding: 1.5rem;
//           border-radius: 20px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .testimonial-card-mini:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 60px rgba(123, 75, 255, 0.1);
//         }

//         .mini-quote {
//           font-size: 2rem;
//           color: rgba(123, 75, 255, 0.2);
//           margin-bottom: 1rem;
//         }

//         .mini-text {
//           color: #666;
//           font-size: 0.95rem;
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }

//         .mini-footer {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .mini-image {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .mini-name {
//           font-size: 1rem;
//           font-weight: 600;
//           color: var(--primary);
//           margin-bottom: 0.2rem;
//         }

//         .mini-service {
//           font-size: 0.8rem;
//           color: #999;
//         }

//         .stats-banner {
//           background: linear-gradient(135deg, var(--primary), var(--secondary));
//           padding: 3rem;
//           border-radius: 40px;
//           color: white;
//         }

//         .banner-stat {
//           text-align: center;
//         }

//         .stat-number {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.2;
//           margin-bottom: 0.5rem;
//         }

//         .stat-label {
//           font-size: 1rem;
//           opacity: 0.9;
//         }

//         .video-modal {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.8);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//           backdrop-filter: blur(5px);
//         }

//         .modal-content {
//           background: white;
//           padding: 2rem;
//           border-radius: 30px;
//           max-width: 600px;
//           width: 90%;
//           position: relative;
//         }

//         .close-modal {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           background: none;
//           border: none;
//           font-size: 2rem;
//           cursor: pointer;
//           color: #666;
//         }

//         // .video-placeholder {
//         //   background: #f0f0f0;
//         //   height: 300px;
//         //   border-radius: 20px;
//         //   display: flex;
//         //   flex-direction: column;
//         //   align-items: center;
//         //   justify-content: center;
//         //   color: #999;
//         // }

//         // .play-icon {
//         //   font-size: 3rem;
//         //   color: var(--accent-purple);
//         //   margin-bottom: 1rem;
//         // }

//         @media (max-width: 768px) {
//           .testimonial-card-main {
//             padding: 2rem;
//           }
          
//           .testimonial-header {
//             flex-direction: column;
//             text-align: center;
//           }
          
//           .testimonial-text {
//             font-size: 1rem;
//           }
          
//           .stats-banner {
//             padding: 2rem;
//           }
          
//           .stat-number {
//             font-size: 1.8rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Testimonials;


// components/Testimonials.jsx
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { 
//   FaQuoteLeft, 
//   FaStar, 
//   FaArrowLeft, 
//   FaArrowRight,
//   FaPlay,
//   FaPause
// } from "react-icons/fa";
// import { IoMdQuote } from "react-icons/io";

// const testimonials = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     location: "Mumbai",
//     image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80",
//     text: "I struggled with anxiety for over a decade. After just 3 sessions of hypnotherapy, I feel like a different person. The constant worry in my mind has finally quieted down. I can breathe again.",
//     rating: 5,
//     service: "Anxiety Relief",
//     date: "2024"
//   },
//   {
//     id: 2,
//     name: "Rahul Mehta",
//     location: "Delhi",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "Past life regression was an eye-opening experience. It helped me understand recurring patterns in my relationships. The healing has been profound and lasting.",
//     rating: 5,
//     service: "Past Life Regression",
//     date: "2023"
//   },
//   {
//     id: 3,
//     name: "Anjali Desai",
//     location: "Bangalore",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The addiction therapy program changed my life. I had tried everything else, but nothing worked until I addressed the subconscious roots. 2 years sober and counting!",
//     rating: 5,
//     service: "Addiction Recovery",
//     date: "2024"
//   },
//   {
//     id: 4,
//     name: "Vikram Singh",
//     location: "Pune",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The Law of Attraction guidance helped me manifest my dream job and improve my relationship. The techniques are practical and actually work!",
//     rating: 5,
//     service: "Law of Attraction",
//     date: "2023"
//   },
//   {
//     id: 5,
//     name: "Neha Gupta",
//     location: "Chennai",
//     image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "Ho'oponopono healing helped me forgive and release past hurts. I finally feel at peace with myself and my relationships have transformed.",
//     rating: 5,
//     service: "Ho'oponopono",
//     date: "2024"
//   },
//   {
//     id: 6,
//     name: "Arjun Nair",
//     location: "Kochi",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//     text: "The parenting counselling sessions gave me tools I never knew existed. My relationship with my teenager has completely transformed.",
//     rating: 5,
//     service: "Parenting Counselling",
//     date: "2023"
//   },
// ];

// function Testimonials() {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);

//   // ✅ Autoplay: changes slide every 4 seconds
//   useEffect(() => {
//     if (!autoplay) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [autoplay, currentIndex]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section ref={containerRef} className="testimonials-section section-padding position-relative overflow-hidden">
//       {/* Background Elements */}
//       <motion.div className="testimonials-bg" style={{ y }} />

//       <div className="container">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-5"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="section-badge">Client Stories</span>
//           <h2 className="section-title">
//             Real Stories of <span className="gradient-text">Transformation</span>
//           </h2>
//           <p className="section-subtitle">
//             Hear from those who've walked the path and found their way to healing.
//             Their stories are proof that change is possible.
//           </p>
//         </motion.div>

//         {/* Main Testimonial Slider */}
//         <div className="testimonial-slider">
//           <div className="row align-items-center">
//             <div className="col-lg-8 mx-auto">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="testimonial-card-main"
//                 >
//                   {/* Quote Icon */}
//                   <IoMdQuote className="main-quote-icon" />

//                   <div className="testimonial-content">
//                     {/* ✅ FIXED: videoAvailable check & motion.button completely removed */}
//                     <div className="testimonial-header">
//                       <img
//                         src={testimonials[currentIndex].image}
//                         alt={testimonials[currentIndex].name}
//                         className="testimonial-image"
//                       />
//                       <div className="testimonial-info">
//                         <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
//                         <p className="testimonial-location">{testimonials[currentIndex].location}</p>
//                         <div className="testimonial-rating">
//                           {[...Array(5)].map((_, i) => (
//                             <FaStar key={i} className="star-icon filled" />
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>

//                     <div className="testimonial-footer">
//                       <span className="testimonial-service">
//                         Service: {testimonials[currentIndex].service}
//                       </span>
//                       <span className="testimonial-date">{testimonials[currentIndex].date}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Slider Controls */}
//               <div className="slider-controls">
//                 <motion.button
//                   className="control-btn"
//                   onClick={prevTestimonial}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <FaArrowLeft />
//                 </motion.button>

//                 <div className="slider-dots">
//                   {testimonials.map((_, index) => (
//                     <motion.span
//                       key={index}
//                       className={`dot ${index === currentIndex ? 'active' : ''}`}
//                       onClick={() => setCurrentIndex(index)}
//                       whileHover={{ scale: 1.2 }}
//                     />
//                   ))}
//                 </div>

//                 <motion.button
//                   className="control-btn"
//                   onClick={nextTestimonial}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <FaArrowRight />
//                 </motion.button>
//               </div>

//               {/* ✅ Autoplay Toggle Button */}
//               <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//                 <motion.button
//                   className="autoplay-btn"
//                   onClick={() => setAutoplay(!autoplay)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {autoplay ? <FaPause size={11} /> : <FaPlay size={11} />}
//                   <span>{autoplay ? 'Pause' : 'Play'} Autoplay</span>
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Grid */}
//         <motion.div
//           className="testimonial-grid mt-5 pt-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h3 className="text-center mb-4">More Success Stories</h3>
//           <div className="row g-4">
//             {testimonials.slice(0, 3).map((testimonial) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="col-md-4"
//                 variants={itemVariants}
//               >
//                 <div className="testimonial-card-mini">
//                   <FaQuoteLeft className="mini-quote" />
//                   <p className="mini-text">"{testimonial.text.substring(0, 100)}..."</p>
//                   <div className="mini-footer">
//                     <img src={testimonial.image} alt={testimonial.name} className="mini-image" />
//                     <div>
//                       <h4 className="mini-name">{testimonial.name}</h4>
//                       <p className="mini-service">{testimonial.service}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stats Banner */}
//         <motion.div
//           className="stats-banner mt-5"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">5000+</div>
//                 <div className="stat-label">Happy Clients</div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">98%</div>
//                 <div className="stat-label">Success Rate</div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="banner-stat">
//                 <div className="stat-number">15+</div>
//                 <div className="stat-label">Years Experience</div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .testimonials-section {
//           background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
//           position: relative;
//         }

//         .testimonials-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-image: 
//             radial-gradient(circle at 80% 20%, rgba(123, 75, 255, 0.05) 0%, transparent 40%),
//             radial-gradient(circle at 20% 80%, rgba(85, 198, 247, 0.05) 0%, transparent 40%);
//           pointer-events: none;
//         }

//         .testimonial-slider {
//           position: relative;
//           padding: 2rem 0;
//         }

//         .testimonial-card-main {
//           background: white;
//           padding: 3rem;
//           border-radius: 40px;
//           box-shadow: 0 30px 70px rgba(123, 75, 255, 0.15);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .main-quote-icon {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           font-size: 6rem;
//           color: rgba(123, 75, 255, 0.1);
//           z-index: 1;
//         }

//         .testimonial-content {
//           position: relative;
//           z-index: 2;
//         }

//         .testimonial-header {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//           flex-wrap: wrap;
//         }

//         .testimonial-image {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 3px solid var(--accent-purple);
//         }

//         .testimonial-info {
//           flex: 1;
//         }

//         .testimonial-name {
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: var(--primary);
//           margin-bottom: 0.2rem;
//         }

//         .testimonial-location {
//           color: #666;
//           font-size: 0.9rem;
//           margin-bottom: 0.3rem;
//         }

//         .testimonial-rating {
//           display: flex;
//           gap: 3px;
//         }

//         .star-icon {
//           color: #ddd;
//           font-size: 0.9rem;
//         }

//         .star-icon.filled {
//           color: #FFD700;
//         }

//         .testimonial-text {
//           font-size: 1.2rem;
//           line-height: 1.6;
//           color: #444;
//           margin-bottom: 2rem;
//           font-style: italic;
//           position: relative;
//           padding-left: 1rem;
//           border-left: 3px solid var(--accent-purple);
//         }

//         .testimonial-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           color: #666;
//           font-size: 0.9rem;
//           padding-top: 1rem;
//           border-top: 1px solid #eee;
//         }

//         .testimonial-service {
//           color: var(--accent-purple);
//           font-weight: 600;
//         }

//         .slider-controls {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//           margin-top: 2rem;
//         }

//         .control-btn {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           border: 1px solid rgba(123, 75, 255, 0.2);
//           background: white;
//           color: var(--accent-purple);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .control-btn:hover {
//           background: var(--accent-purple);
//           color: white;
//           border-color: var(--accent-purple);
//         }

//         .slider-dots {
//           display: flex;
//           gap: 10px;
//         }

//         .dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: #ddd;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .dot.active {
//           width: 30px;
//           border-radius: 10px;
//           background: var(--accent-purple);
//         }

//         .autoplay-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 0.5rem 1.5rem;
//           background: none;
//           border: 1px solid rgba(123, 75, 255, 0.25);
//           border-radius: 50px;
//           color: var(--primary);
//           cursor: pointer;
//           font-size: 0.8rem;
//           transition: all 0.3s ease;
//         }

//         .autoplay-btn:hover {
//           background: rgba(123, 75, 255, 0.08);
//           border-color: rgba(123, 75, 255, 0.5);
//         }

//         .testimonial-card-mini {
//           background: white;
//           padding: 1.5rem;
//           border-radius: 20px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(123, 75, 255, 0.1);
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .testimonial-card-mini:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 60px rgba(123, 75, 255, 0.1);
//         }

//         .mini-quote {
//           font-size: 2rem;
//           color: rgba(123, 75, 255, 0.2);
//           margin-bottom: 1rem;
//         }

//         .mini-text {
//           color: #666;
//           font-size: 0.95rem;
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }

//         .mini-footer {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .mini-image {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .mini-name {
//           font-size: 1rem;
//           font-weight: 600;
//           color: var(--primary);
//           margin-bottom: 0.2rem;
//         }

//         .mini-service {
//           font-size: 0.8rem;
//           color: #999;
//         }

//         .stats-banner {
//           background: linear-gradient(135deg, var(--primary), var(--secondary));
//           padding: 3rem;
//           border-radius: 40px;
//           color: white;
//         }

//         .banner-stat {
//           text-align: center;
//         }

//         .stat-number {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.2;
//           margin-bottom: 0.5rem;
//         }

//         .stat-label {
//           font-size: 1rem;
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .testimonial-card-main {
//             padding: 2rem;
//           }

//           .testimonial-header {
//             flex-direction: column;
//             text-align: center;
//           }

//           .testimonial-text {
//             font-size: 1rem;
//           }

//           .stats-banner {
//             padding: 2rem;
//           }

//           .stat-number {
//             font-size: 1.8rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Testimonials;