import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Navbar bg="transparent" variant="transparent" expand="lg" className={`${show ? 'show' : 'hide'}`} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/img/logo.png" alt="" className='logo h-auto' />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;