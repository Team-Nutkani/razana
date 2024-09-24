import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ServiceItem = ({ icon, title, description }) => (
  <div>
    <i className={`bi ${icon} fs-1 text-white ` } ></i>
    <h3 className='text-white mb-3 fw-bold'>{title}</h3>
    <p style={{color: 'white'}}>{description}</p>
  </div>
);

// JSON data for services
const servicesData = [
  {
    icon: 'bi-cup',
    title: 'Catering',
    description: 'Our exceptional catering services offer a diverse menu that will delight your guests.'
  },
  {
    icon: 'bi-car-front',
    title: 'Parking',
    description: 'We provide safe and efficient parking solutions for all types of venues.'
  },
  {
    icon: 'bi-people',
    title: 'Hospitality',
    description: 'Experience warm hospitality services that cater to all your needs.'
  },
  {
    "icon": "bi-truck-front",
    "title": "Chauffeur-Driven",
    "description": "Experience premium chauffeur-driven transportation with comfort, safety, and luxury."
  }
];

export default function ServiceWIthIcons() {
  return (
    <div style={{ backgroundColor: 'rgb(10, 30, 63)', color:'black', padding: '4rem 0' }}>
      <Container>



        <div className="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
          <div style={{
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '-1rem'
          }}>
            <i className="bi bi-people"> </i>
          </div>
          <span className='text-white fw-bold border border-start-0 border-0.5 rounded-pill px-4 py-1'>WHO WE ARE</span>
        </div>

        <h4 className="display-4 fw-bold mb-5 text-center text-md-start" style={{ color: 'white' }}>
        Your Trusted Service Partner
        </h4>

        <Row>
      {servicesData.map((service, index) => (
        <Col key={index} md={3} sm={6} className='text-center text-md-start'>
          <ServiceItem
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </Col>
      ))}
    </Row>
      </Container>
    </div>
  );
}