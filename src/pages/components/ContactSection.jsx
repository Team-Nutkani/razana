import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button, Row, Col, Container } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const ContactSection = () => {
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
                <Container className='my-5'>
                    <BootstrapForm noValidate onSubmit={handleSubmit}>

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

                        {/* Third Row - Message */}
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

                        {/* Submit Button */}
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </BootstrapForm>
                </Container>
            )}

        </Formik>
    );
};

export default ContactSection;
