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
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the screen size
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);  // Mobile screen
    } else {
      setIsMobile(false); // Desktop screen
    }
  };

  useEffect(() => {
    checkScreenSize(); // Check initial screen size
    window.addEventListener('resize', checkScreenSize); // Recheck on resize

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const data = [
    {
      heading: 'Transportation and Chauffeur Service',
      description: "Welcome to Rzana Luxury Service, a company that offers a variety of luxury services including chauffeur-driven transportation, valet parking, catering, and parking management. The brochure highlights the company's commitment to providing exceptional service and a sophisticated experience for its clients.",
      image: 'assets/img/services/chauffeur.png',
    },
    {
      heading: 'Our Experience',
      description: 'Since 2015, Rzana Luxury Service has been delivering exceptional transportation...',
      image: 'assets/img/services-bg.jpg',
    },
    {
      heading: 'Our Vision',
      description: 'Our vision is to always innovate new and modern strategies and services for our customers in everything that is offered through the company to reach their complete satisfaction in every step of their journey with us.',
      image: 'assets/img/services.jpg',
    },
    {
      heading: 'Hospitality',
      description: "At Rzana Luxury Service, we deliver exceptional hospitality, offering personalized, high-end experiences that cater to every client's unique needs with unparalleled attention to detail.",
      image: 'assets/img/services/hospitality.png',
    },
    {
      heading: 'Catering',
      description: "Welcome to Rzana Luxury Service, a company that offers a variety of luxury services including chauffeur-driven transportation, valet parking, catering, and parking management. The brochure highlights the company's commitment to providing exceptional service and a sophisticated experience for its clients.",
      image: 'assets/img/services/catering.png',
    },
    {
      heading: 'Valet Parking',
      description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency.",
      image: 'assets/img/valet-parking.png',
    },
    {
      heading: 'Parking Management',
      description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency.",
      image: 'assets/img/services/parking.png',
    },
  ];


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
      transition: {
        type: 'spring',
        stiffness: 80000,
        damping: 2000,
      },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 20,
      },
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
  };

  return (
    <div>
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={!isMobile ? cursorVariant : ''}
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
