import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook

const animationVariants = {
    hidden: { opacity: 0, y: 50 },  // Start slightly below and hidden
    visible: { opacity: 1, y: 0 },  // Animate to normal position
};

const Services = ({ text, heading, image }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect if component is in view

    return (
        <motion.div
            ref={ref} // Attach observer to the outer div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} // Trigger animation on scroll
            variants={animationVariants}
            transition={{ duration: 0.6 }} // Animation duration
            className='my-5'
        >
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className={'order-0 mb-3'}>
                        <Image src={image} alt={heading} className='rounded-5 w-100' />
                    </Col>
                    <Col lg={6} className='mb-3'>
                        <h2 className='fs-3 fw-bold'>{heading}</h2>
                        <p className='fs-5'>{text}</p>
                        <Button variant='transparent' className='glowing-btn f-5 fw-bold bg-transparent rounded-pill px-5 border border-1 py-2'>Read More</Button>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Services;
