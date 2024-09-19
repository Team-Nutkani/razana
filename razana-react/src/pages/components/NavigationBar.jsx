import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';

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
        className={`fixed-top ${scrolled ? 'bg-white shadow' : 'bg-transparent-cutom'}`}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        <Container className=' border-bottom border-white pb-3'>
          <Navbar.Toggle aria-controls="offcanvas-nav" />
          <i onClick={() => setShowOffcanvas(true)} >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          </i>
          <Navbar.Brand href="#home" className="ms-auto">
            <img src='assets/img/logo.svg' className='logo' />
          </Navbar.Brand>
          <Nav.Link href="#search" className="ms-auto">
            <Search size={24} />
          </Nav.Link>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile navigation */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="start"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Nav.Link href={`#${item.toLowerCase()}`}>{item}</Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </motion.div>
  );
}
