import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
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
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Navbar
        expand="lg"
        className={`fixed-top pb-0 ${scrolled ? 'bg-white-custom shadow' : 'bg-transparent-custom'}`}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        <Container className={`${scrolled ? '' : 'border-bottom border-white pb-3'}`}>
          <label className="text-white d-flex align-items-center gap-2" onClick={() => setShowOffcanvas(true)}>
            <i className="bi bi-list fs-3"></i> Menu
          </label>
          <Navbar.Brand href="#home" className="ms-auto">
            <img src="assets/img/logo.svg" alt="logo" className="logo" />
          </Navbar.Brand>
          <Nav.Link href="#search" className="ms-auto text-white">
            <Search size={24} />
          </Nav.Link>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile navigation */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="start"
        className="bg-white-custom"
      >
        <Offcanvas.Header className='text-white py-4' closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-white text-end pe-5">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`#${item.toLowerCase()}`} className='text-white fs-3 text-decoration-none mb-4'>{item}</Link>
              </motion.div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </motion.div>
  );
}
