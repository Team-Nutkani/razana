import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Testimonial from './components/Testimonials';
import Services2 from './components/Services2';
import Stats from './components/Stats';

import './Home.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const data = [
    {
      heading: 'Transportation and Chauffeur Service',
      description: 'Zana Luxury Service offers premier chauffeur-driven transportation, blending elegance and efficiency...',
      image: 'assets/img/services.jpg',
    },
    {
      heading: 'Our Experience',
      description: 'Since 2015, Rzana Luxury Service has been delivering exceptional transportation...',
      image: 'assets/img/services-bg.jpg',
    },
    {
      heading: 'Our Vision',
      description: 'Our vision is to always innovate new and modern strategies...',
      image: 'assets/img/services.jpg',
    },
    {
      heading: 'Hospitality',
      description: 'At Rzana Luxury Service, we deliver exceptional hospitality...',
      image: 'assets/img/hospitality.jpg',
    },
    {
      heading: 'Catering',
      description: 'Rzana offers top-quality catering with a diverse range of food...',
      image: 'assets/img/services.jpg',
    },
    {
      heading: 'Valet Parking',
      description: 'Rzana has been Saudi Arabia\'s first valet service...',
      image: 'assets/img/services-bg.jpg',
    },
    {
      heading: 'Parking Management',
      description: 'Rzana provides advanced parking management with smart gate technology...',
      image: 'assets/img/services.jpg',
    },
  ];

  // Track mouse position
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

  // Cursor variants for faster and smoother animation
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 10, 
      width: 10,
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 20,
      },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,  // Larger size when hovering over interactive elements
      width: 40,
      transition: {
        type: 'spring',
        stiffness: 800,  // Fast response for hover as well
        damping: 20,
      },
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
  };

  // Handle mouse hover events
  const textEnter = () => setCursorVariant('hover');
  const textLeave = () => setCursorVariant('default');

  return (
    <div>
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          border: '2px solid white',
          backgroundColor: 'transparent',
        }}
      />

      {/* Main content */}
      <div>
        <NavigationBar setCursorVariant={setCursorVariant} />
        <Hero />
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                {(index % 2 === 0) ?
                  <Services text={item.description} heading={item.heading} image={item.image} />
                  : <>{index / 1 === 1 ? <Stats heading={item.heading} description={item.description} /> : <Services2 text={item.description} heading={item.heading} image={item.image} />}</>
                }
              </div>
            );
          })
        }
        <Testimonial />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
