import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Image } from "react-bootstrap";

const slidesData = [
    {
        id: 1,
        backgroundImage: "assets/img/car-parking.png",
        heading: "Welcome to Rzana Luxury Service",
        description: "Welcome to Rzana Luxury Service, a company that offers a variety of luxury services including chauffeur-driven transportation, valet parking, catering, and parking management. The brochure highlights the company's commitment to providing exceptional service and a sophisticated experience for its clients."
    },
    {
        id: 2,
        backgroundImage: "assets/img/hospitality.png",
        heading: "Hospitality",
        description: "At Rzana Luxury Service, we deliver exceptional hospitality, offering personalized, high-end experiences that cater to every client's unique needs with unparalleled attention to detail."
    },
    {
        id: 3,
        backgroundImage: "assets/img/catering.png",
        heading: "Catering",
        description: "Rzana offers top-quality catering with a diverse range of food, including exquisite Saudi cuisine, ensuring a premium dining experience tailored to any occasion."
    },
    {
        id: 4,
        backgroundImage: "assets/img/valet-parking.png",
        heading: "Valet Parking",
        description: "Since 2015, Rzana has been Saudi Arabia's first valet service and pioneer in using advanced technology, setting a new standard in luxury and efficiency."
    }
];




const Hero = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={true}
            interval={2000}
            className="custom-carousel"
        >
            {slidesData?.map((slide, i) => (
                <Carousel.Item key={i}>
                    <Image src={slide.backgroundImage} className="w-100 h-100" alt={`Slide ${i}`} />
                    <Carousel.Caption className="d-flex flex-column w-100 justify-content-center align-items-center">
                        <Container className="px-0 px-lg-5 mt-lg-0 mt-3">
                            <h2 className="fs-1">{slide.heading}</h2>
                            <p className="fs-5 ">{slide.description}</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};


export default Hero;
