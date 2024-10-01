import React from 'react';
import { Container } from 'react-bootstrap';
import AnimatedText from './AnimatedText';

const CeremoniesShows = () => {
  return (
    <div className="ceremonies-shows-section vh-100" id="ceremonies">
      <Container md className='h-100'>
        <div className='d-flex align-items-center justify-content-center h-100'>
          <div className='text-center'>
            <AnimatedText
              text="CEREMONIES+\nSHOWS"
              color="orange"
            />
            <p className="mt-4">
              We specialize in creating awe-inspiring ceremonies and shows that
              leave audiences spellbound. From opening spectacles to award ceremonies,
              our productions are a perfect blend of creativity, technology, and emotion.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CeremoniesShows;