import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaTools, FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const WhyChose = () => {
  return (

  
        /* Why Chose Us */
          <section className="why-choose-us-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <Container>
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning rounded-circle p-2 me-2">
                    <FaTools className="text-white" />
                  </div>
                  <span className="text-uppercase fw-bold text-muted">Our Advantages</span>
                </div>
                <h2 className="display-4 fw-bold mb-4" style={{ color: '#1e3a8a' }}>WHY CHOOSE US</h2>
                <p className="lead mb-4">
                  Our Multi-Skilled Craftsmen can complete 758 projects, saving you time
                </p>
                <ul className="list-unstyled">
                  {['Highly Professional Staff', '100% Satisfaction Guarantee', 'Quality Control System', 'Timely Delivery', 'Accurate Testing Process'].map((item, index) => (
                    <li key={index} className="mb-2">
                      <FaCheck className="text-info me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} lg={6}>
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xIy6Fw61JzBjlFdMjlq4F63SDv6xhP.png" 
                  fluid 
                  alt="Construction tools on blueprints" 
                  className="shadow-lg rounded"
                />
              </Col>
            </Row>
          </Container>
        </section>
  )
}

