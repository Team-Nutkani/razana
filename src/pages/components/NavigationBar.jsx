import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavigationBar({setCursorVariant}) {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Navbar
        expand="lg"
        className={`fixed-top pb-0 ${scrolled ? 'bg-white-custom shadow' : ''}`}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        <Container className={`${scrolled ? '' : 'border-bottom border-white pb-3'}`}>
          {/* Hamburger Menu Icon */}
          <motion.label
            className="text-white d-flex align-items-center gap-2"
            onClick={() => setShowOffcanvas(true)}
            onHoverStart={setCursorVariant("hover")}
            onHoverEnd={setCursorVariant('default')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bi bi-list fs-3"></i>
          </motion.label>

          {/* Logo */}
          <Navbar.Brand href="#home" className="ms-auto">
            <motion.img
              src="assets/img/logo.png"
              alt="logo"
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeIn' }}
            />
          </Navbar.Brand>

          {/* Search Icon */}
          <Nav.Link href="#search" className="ms-auto text-white">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Search size={24} />
            </motion.div>
          </Nav.Link>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile navigation */}
      <AnimatePresence>
        {showOffcanvas && (
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="start"
            className="bg-white-custom"
            as={motion.div}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Offcanvas.Header closeButton className="text-white py-4" />
            <Offcanvas.Body>
              <Nav className="flex-column text-white text-end pe-5">
                {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/${item.toLowerCase() === "home" ? '' : item.toLowerCase() === "about" ? '': item.toLowerCase()}`}
                      className="text-white fs-3 text-decoration-none mb-4"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
