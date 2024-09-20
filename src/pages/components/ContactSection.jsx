import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const animationVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from below
    visible: { opacity: 1, y: 0 },  // Animate to position
};

const ContactSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect if in view
    const handleSubmit = (values) => {
        console.log('Form values', values);
    };

    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                subject: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, errors, touched }) => (
                <Container className='my-5' ref={ref}> {/* Attach ref to container */}
                    <BootstrapForm noValidate onSubmit={handleSubmit}>

                        {/* Full Name and Email */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation on scroll
                            variants={animationVariants}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Row className="mb-3">
                                <Col md={6}>
                                    <BootstrapForm.Group controlId="formFullName">
                                        <BootstrapForm.Label>Full Name</BootstrapForm.Label>
                                        <Field
                                            name="fullName"
                                            type="text"
                                            className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>
                                </Col>

                                <Col md={6}>
                                    <BootstrapForm.Group controlId="formEmail">
                                        <BootstrapForm.Label>Email</BootstrapForm.Label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>
                                </Col>
                            </Row>
                        </motion.div>

                        {/* Subject */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation on scroll
                            variants={animationVariants}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Row className="mb-3">
                                <Col>
                                    <BootstrapForm.Group controlId="formSubject">
                                        <BootstrapForm.Label>Subject</BootstrapForm.Label>
                                        <Field
                                            name="subject"
                                            type="text"
                                            className={`form-control ${touched.subject && errors.subject ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="subject" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>
                                </Col>
                            </Row>
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation on scroll
                            variants={animationVariants}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Row className="mb-3">
                                <Col>
                                    <BootstrapForm.Group controlId="formMessage">
                                        <BootstrapForm.Label>Message</BootstrapForm.Label>
                                        <Field
                                            name="message"
                                            as="textarea"
                                            rows={4}
                                            className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                                        />
                                        <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                    </BootstrapForm.Group>
                                </Col>
                            </Row>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation on scroll
                            variants={animationVariants}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </motion.div>

                    </BootstrapForm>
                </Container>
            )}
        </Formik>
    );
};

export default ContactSection;
