import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeroSection() {
return (
    <div>
    {/* Hero section for other pages */}
      <section className="hero-section" style={{
        backgroundColor: '#1e2a3a',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="mb-4">
                <span className="bg-warning text-dark px-4 py-2 rounded-pill">WHO WE ARE</span>
              </div>
              <h1 className="display-5 fw-bold mb-4">Uncompromising standards, personalized services – that’s our promise.</h1>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
);
}



