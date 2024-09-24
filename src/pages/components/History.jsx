import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function History() {
  return (
    <Container fluid className="bg-white py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={3}>
          <Image
            src="assets/img/61266d206e500.jpeg"
            alt="Handyman with tools"
            className="img-fluid w-100 h-auto rounded-5"
          />
        </Col>
        <Col md={6} lg={6}>
          <h3 className=" mb-4" style={{ fontWeight: 'bold', lineHeight: '1.2' }}>
            Rzana Luxury Services - <span className="fw-bold">Our History</span>
          </h3>
          <p className="mb-4 text-dark" style={{ fontSize: '13px' }}>
            Since 2015, Rzana Luxury Service has been delivering exceptional transportation and golf car services with chauffeur, blending elegance and efficiency to offer a superior, seamless travel experience.
          </p>
          <p className="mb-4 text-dark" style={{ fontSize: '13px' }}>
            Our fleet of luxury vehicles and experienced chauffeurs are dedicated to providing personalized service that exceeds your expectations.
          </p>
          <Button  size="lg" className="px-4 py-2 text-white fw-bold btn-primary" 
           style={{color:'white', backgroundColor:'rgb(10 30 63)'}}
          >
            GET STARTED <i className="bi bi-arrow-right ms-2"></i>
          </Button>
        </Col>
        <Col md={12} lg={3}>
          <div className="">
            <p className=" mb-3" 
            style={{ fontSize: '0.9rem', color:'rgb(10 30 63)' }}>
              EXPERIENCE</p>
            <h2 className="text-primary display-1 fw-bold mb-0">25+</h2>
            <p className="border-bottom  pb-4 text-dark" style={{ fontSize: '0.9rem' }}>years as a trusted provider</p>
          </div>
          <div className="d-flex align-items-center gap-3 pt-4">
            <div>
              <i className="bi bi-telephone-fill fs-4 fw-bold mb-0 py-3 px-3 rounded-5" 
              style={{color:'white', backgroundColor:'rgb(10 30 63)'}}
              ></i>
            </div>
            <div>
              <p className="text-dark mb-1" style={{ fontSize: '0.8rem' }}>HAVE ANY QUESTION? GIVE US A CALL</p>
              <p className=" fs-4 fw-bold mb-0" style={{color:'rgb(10 30 63)'}}>
                (084)123 - 456 88
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
