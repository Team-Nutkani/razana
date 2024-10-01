import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <p>&copy; 2024 Black Orange. All rights reserved.</p>
          <div>
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;