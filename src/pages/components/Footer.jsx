import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-primary py-5 mt-5'>
            <Container className='text-white'>
                <div className="pb-5 text-center border-bottom">Rzana </div>
                <Row className='mt-5'>
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <div className="d-flex flex-column">
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </div>
                    </Col>
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <div className="d-flex flex-column">
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </div>
                    </Col>
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <div className="d-flex flex-column">
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </div></Col>
                    <Col md={4} lg={3} xs={6} className='text-white'>
                        <div className="d-flex flex-column">
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Pre-owned</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Find a dealer</Link>
                            <Link to={'/'} className='text-white text-decoration-none mb-3'>Careers</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer