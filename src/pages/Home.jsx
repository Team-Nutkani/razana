import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import Services2 from './components/Services2';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection';
import './Home.css';

export default function Home() {
  const data = [
    {
      heading: 'Transportation and Chauffeur Service',
      description: "Welcome to Rzana Luxury Service, a company that offers a variety of luxury services including chauffeur-driven transportation, valet parking, catering, and parking management. The brochure highlights the company's commitment to providing exceptional service and a sophisticated experience for its clients.",
      image: 'assets/img/services/chauffeur.png',
    },
    {
      heading: 'Our Experience',
      description: 'Since 2015, Rzana Luxury Service has been delivering exceptional transportation...',
      image: 'assets/img/services-bg.jpg',
    },
    {
      heading: 'Our Vision',
      description: 'Our vision is to always innovate new and modern strategies and services for our customers in everything that is offered through the company to reach their complete satisfaction in every step of their journey with us.',
      image: 'assets/img/services.jpg',
    },
    {
      heading: 'Hospitality',
      description: "At Rzana Luxury Service, we deliver exceptional hospitality, offering personalized, high-end experiences that cater to every client's unique needs with unparalleled attention to detail.",
      image: 'assets/img/services/hospitality.png',
    },
    {
      heading: 'Catering',
      description: "Welcome to Rzana Luxury Service, a company that offers a variety of luxury services including chauffeur-driven transportation, valet parking, catering, and parking management. The brochure highlights the company's commitment to providing exceptional service and a sophisticated experience for its clients.",
      image: 'assets/img/services/catering.png',
    },
    {
      heading: 'Valet Parking',
      description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency.",
      image: 'assets/img/valet-parking.png',
    },
    {
      heading: 'Parking Management',
      description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency.",
      image: 'assets/img/services/parking.png',
    },
  ];

  return (
    <div>
      <Hero />
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              {(index % 2 === 0) ?
                <Services text={item.description} heading={item.heading} image={item.image} />
                : <>{index / 1 === 1 ? <Stats heading={item.heading} description={item.description} /> : <Services2 text={item.description} heading={item.heading} image={item.image} />}</>
              }
            </div>
          );
        })
      }
      <Testimonial />
      <ContactSection />
    </div>
  );
}
