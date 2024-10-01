import React from 'react';
import { Container } from 'react-bootstrap';
import AnimatedText from './AnimatedText';

const JourneyToDiscovery = () => {
    return (
        <div className="journey-section vh-100" id="journey">
            <Container md className='h-100'>
                <div className='d-flex align-items-center justify-content-center h-100'>
                    <div className='text-center'>
                        <AnimatedText
                            text="JOURNEY TO \n DISCOVERY"
                            color="orange"
                        />
                        <p className="mt-4">
                            With a wealth of experience in hosting high-profile events, we have a
                            unique understanding of what it takes to create unforgettable moments.
                            Our journey is defined by pushing boundaries, embracing creativity,
                            and delivering experiences that leave lasting impressions.
                        </p>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default JourneyToDiscovery;