import React from 'react';
import { Container } from 'react-bootstrap';
import AnimatedText from './AnimatedText';

const InternationalEvents = () => {
  return (
    <div className="international-events-section vh-100" id="events">
      <Container md className='h-100'>
        <div className='d-flex align-items-center justify-content-center h-100'>
          <div className='text-center'>
            <AnimatedText
              text="INTERNATIONAL+\nMAJOR EVENTS"
              color="orange"
            />
            <p className="mt-4">
              From global sporting championships to international conferences,
              we have the expertise to manage large-scale events that capture
              the world's attention. Our meticulous planning and flawless execution
              ensure success on the global stage.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InternationalEvents;