import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Services from './components/Services';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 10,
      width: 10,
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('hover');
  const textLeave = () => setCursorVariant('default');

  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          border: '2px solid white',
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
        }}
      />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <NavigationBar />
        <Hero />
        <Services position={true} image={'assets/img/services.jpg'} heading={'Luxury Tran'} text={'dhfviy hvbh'} />
      </div>
    </div>
  );
}
