import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Services = ({ position, text, heading, image }) => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col md={6} className={position ? 'order-0' : 'order-1'} sm={12}>
                        <Image src={image} alt={heading} className='rounded-5' />
                    </Col>
                    <Col md={6} sm={12}>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services