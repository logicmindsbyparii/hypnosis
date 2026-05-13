// components/SimpleParticles.jsx (Alternative without tsparticles)
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SimpleParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 5,
        color: i % 3 === 0 ? "#7B4BFF" : i % 3 === 1 ? "#55C6F7" : "#ffffff",
        xMove: (Math.random() * 60 - 30),
        yMove: (Math.random() * 60 - 30),
      }));
    };

    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 4,
    }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: 0.2,
            boxShadow: `0 0 15px ${particle.color}`,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, particle.xMove, 0],
            y: [0, particle.yMove, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default SimpleParticles;