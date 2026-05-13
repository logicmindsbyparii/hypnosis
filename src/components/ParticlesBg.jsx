// components/ParticlesBg.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Correct import - no -slim suffix

function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        particles: {
          color: {
            value: ["#7B4BFF", "#55C6F7", "#ffffff"],
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
      className="particles-bg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 4,
        pointerEvents: "none",
      }}
    />
  );
}

export default ParticlesBg;