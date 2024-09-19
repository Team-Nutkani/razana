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
      heading: 'Transportation and Chauffeur Service ',
      description: 'zana Luxury Service offers premier chauffeur-driven transportation, blending elegance and efficiency. Our professional drivers and high-end vehicles ensure a sophisticated, seamless, and personalized journey for our esteemed clients.',
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Our experience ',
      description: 'Rzana Luxury Service Since 2015, Rzana Luxury Service has been delivering exceptional transportation and golf car services with chauffeur, blending elegance and efficiency to offer a superior, seamless travel experience...',
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Our vision',
      description: 'our vision is to always innovate new and modern strategies and services for our customers in everything that is offered through the company to reach their complete satisfaction in every step of their journey with us.',
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'topic Hospitality',
      description: "At Rzana Luxury Service, we deliver exceptional hospitality, offering personalized, high-end experiences that cater to every client's unique needs with unparalleled attention to detail.",
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Catering',
      description: "Rzana offers top-quality catering with a diverse range of food, including exquisite Saudi cuisine, ensuring a premium dining experience tailored to any occasion.",
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Valet parking',
      description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency.",
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'Parking management',
      description: "Rzana provides advanced parking management with smart gate technology, ensuring efficient, secure, and seamless parking solutions for an enhanced customer experience.",
      image: 'assets/img/services.jpg'
    },
    {
      heading: 'UMRAH & HOLY SITES SERVICE',
      description: "Rzana Luxury Service enhances Umrah and Hajj experiences with premium chauffeur and golf car services, offering seamless transportation, expert hospitality, and efficient parking management at holy sites, ensuring a comfortable, respectful, and stress-free pilgrimage journey. REACH YOUR DESTINATION",
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
      height: 5,
      width: 5,
    },
    hover: {
      height: 16,
      width: 16,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('hover');
  const textLeave = () => setCursorVariant('default');

  return (
    <div>
      <motion.div
        className=""
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
