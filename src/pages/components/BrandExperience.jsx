import React from 'react';
import { Container } from 'react-bootstrap';
import AnimatedText from './AnimatedText';

const BrandExperience = () => {
  return (
    <div className="brand-experience-section vh-100" id="brand">
      <Container md className='h-100'>
        <div className='d-flex align-items-center justify-content-center h-100'>
          <div className='text-center'>
            <AnimatedText
              text="BRAND\nEXPERIENCE"
              color="white"
            />
            <p className="mt-4 text-yellow">
              We create immersive brand experiences that resonate with your audience.
              Our team crafts unforgettable moments that bring your brand to life,
              leaving a lasting impact on attendees.
            </p>
          </div>
        </div>
      </Container>
    </div >
  );
};

export default BrandExperience;