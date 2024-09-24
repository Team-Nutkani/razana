import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import NavigationBar from './pages/components/NavigationBar';
import Footer from './pages/components/Footer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function App() {
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
    <BrowserRouter>
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

      {/* Navigation Bar */}
      <NavigationBar setCursorVariant={setCursorVariant} />

      {/* Page Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
