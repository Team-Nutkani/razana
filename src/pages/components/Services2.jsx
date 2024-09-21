import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services2 = ({ text, heading, image }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const bgStyle = {
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat !important',
    };

    return (
        <div style={bgStyle} className="my-5 bg-services-custom">
            <Container className="py-5 h-100">
                <Row className="mt-5 h-100">
                    <Col xs={12} className="text-white text-center">
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 1, delay: 0.4 }}
                            className='fs-2'
                        >
                            {heading}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 1, delay: 0.4 }}
                            className='fs-5'
                        >
                            {text}
                        </motion.p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services2;
