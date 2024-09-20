import React from 'react';
import { Card, Col, Container, Row, CardBody, CardTitle, CardText, Image } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // For scroll-triggered animation

const Services2 = ({ text, heading, image }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const bgStyle = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
        backgroundRepeat: 'no-repeat !important',
    };

    const data = [
        {
            icon: '',
            title: 'Experience',
            text: '12',
        },
        {
            icon: '',
            title: 'Services',
            text: '50',
        },
        {
            icon: '',
            title: 'Happy Clients',
            text: '100+',
        },
    ];

    // Variants for the overall container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animations for child elements (cards)
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div style={bgStyle} className="my-5 bg-services-custom">
            <Container className="py-5">
                <Row className="mt-5">
                    <Col xs={12} className="text-white">
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 1, delay: 0.4  }}
                        >
                            {heading}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {text}
                        </motion.p>
                    </Col>

                    {/* Card animations */}
                    <motion.div
                        className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {data.map((cardData, index) => (
                            <Col xs={12} md={4} className='mb-3'>
                            <motion.div key={index} variants={cardVariants}>
                                <Card className="rounded-5 bg-transparent-custom border border-1 shadow-lg">
                                    <CardBody className="text-center text-white">
                                        <Image className="w-50 mx-auto" src={cardData.icon} />
                                        <CardTitle className="fs-3">{cardData.title}</CardTitle>
                                        <CardText className="fs-4">{cardData.text}+</CardText>
                                    </CardBody>
                                </Card>
                            </motion.div>
                            </Col>
                        ))}
                    </motion.div>
                </Row>
            </Container>
        </div>
    );
};

export default Services2;
