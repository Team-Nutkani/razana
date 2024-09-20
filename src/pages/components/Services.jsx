import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const Services = ({ text, heading, image }) => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col md={6} className={'order-0'}>
                        <Image src={image} alt={heading} className='rounded-5 w-100' />
                    </Col>
                    <Col md={6}>
                        <h2 className='fs-3'>{heading}</h2>
                        <p>{text}</p>
                        <Button variant='primary'>Read More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services