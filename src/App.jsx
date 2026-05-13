// App.jsx - UPDATED (remove Workshops)
import { useEffect } from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import EmotionalPain from "./components/EmotionalPain";
// import SubconsciousMind from "./components/SubconsciousMind";
// import TransformationJourney from "./components/TransformationJourney";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import TherapistCredibility from "./components/TherapistCredibility";
// import Workshops from "./components/Workshops"; // REMOVED
// import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Element name="hero">
          <Hero />
        </Element>

        {/* <Element name="pain">
          <EmotionalPain />
        </Element> */}

        {/* <Element name="subconscious">
          <SubconsciousMind />
        </Element> */}

        {/* <Element name="transformation">
          <TransformationJourney />
        </Element> */}

        <Element name="services">
          <Services />
        </Element>

        {/* <Element name="testimonials">
          <Testimonials />
        </Element> */}

        <Element name="therapist">
          <TherapistCredibility />
        </Element>

        {/* Workshops component removed */}

        {/* <Element name="contact">
          <Contact />
        </Element> */}

        <Element name="cta">
          <FinalCTA />
        </Element>
      </main>

      <Footer />
    </div>
  );
}

export default App;