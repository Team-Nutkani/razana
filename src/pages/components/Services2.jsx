import React from 'react';
import { Card, Col, Container, Row, Button, CardBody, CardTitle, CardText } from 'react-bootstrap';

const Services2 = ({ text, heading, image }) => {
    const bgStyle = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image})`,
    };

    return (
        <div style={bgStyle} className='my-5 bg-services-custom'>
            <Container className='py-5 '>
                <Row className='mt-5'>
                    <Col xs={12} className='text-white'>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <Card className='rounded-5 '>
                            <CardBody className='text-center'>
                                <CardTitle className='fs-3'>
                                    Ex
                                </CardTitle>
                                <CardText className='fs-4'>12+</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <Card className='rounded-5 '>
                            <CardBody className='text-center'>
                                <CardTitle className='fs-3'>
                                    Ex
                                </CardTitle>
                                <CardText className='fs-4'>12+</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-3">
                        <Card className='rounded-5 '>
                            <CardBody className='text-center'>
                                <CardTitle className='fs-3'>
                                    Ex
                                </CardTitle>
                                <CardText className='fs-4'>12+</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services2