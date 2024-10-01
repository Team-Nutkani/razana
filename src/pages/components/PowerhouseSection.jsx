import React from 'react';
import { Container } from 'react-bootstrap';
import AnimatedText from './AnimatedText';

const PowerhouseSection = () => {
  return (
    <div className="powerhouse-section vh-100" id="powerhouse">
      <Container md className='h-100'>

        <div className="d-flex justify-content-center h-100 align-items-center h-100">
          <div className="text-center"><AnimatedText
            text="POWERHOUSE OF\nCREATIVITY +INNOVATION"
            color="orange"
          />
            <p className="mt-4">
              We are a dynamic force in the world of event production, constantly
              pushing the boundaries of what's possible. Our team of creative minds
              and innovative thinkers work tirelessly to bring your vision to life.
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default PowerhouseSection;