import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Services from './components/Services';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');


  const data = [
    {
      heading: 'Trans ',
      description: 'fgkjfdh jldfsh ',
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Trans ',
      description: 'fgkjfdh jldfsh ',
      image: 'assets/img/services.jpg'
    },
  ]
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
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 10,
      width: 10,
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'transparent',
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
        {
          data.map((item, index) => <Services position={index % 2 === 0 ? true : false} text={item.description} heading={item.heading} image={item.image} />)
        }
      </div>
    </div>
  );
}
