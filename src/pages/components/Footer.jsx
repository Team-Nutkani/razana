import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // To trigger animation when in view

const Footer = () => {
    // Intersection observer to trigger animation when in view
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Variants for the column animations
    const columnVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and below the view
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
    };

    return (
        <div className='bg-primary py-5 mt-5'>
            <Container className='text-white'>
                <motion.div
                    className="pb-5 text-center border-bottom"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    Rzana
                </motion.div>

                <Row className='mt-5' ref={ref}>
                    {/* Column 1 */}
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <motion.div
                            className="d-flex flex-column"
                            variants={columnVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </motion.div>
                    </Col>

                    {/* Column 2 */}
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <motion.div
                            className="d-flex flex-column"
                            variants={columnVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </motion.div>
                    </Col>

                    {/* Column 3 */}
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <motion.div
                            className="d-flex flex-column"
                            variants={columnVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </motion.div>
                    </Col>

                    {/* Column 4 */}
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <motion.div
                            className="d-flex flex-column"
                            variants={columnVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
