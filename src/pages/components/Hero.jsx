import React, { useState } from "react";

import HeroSlider, { Slide, Nav } from "hero-slider";
import { motion } from "framer-motion"; // Import framer-motion
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
// Placeholder images with headings and descriptions
const slidesData = [
    {
        id: 1,
        backgroundImage: "assets/img/car-parking.png",
        heading: "Slide 1 Heading",
        description: "This is the description for Slide 1"
    },
    {
        id: 2,
        backgroundImage: "assets/img/hospitality.png",
        heading: "Slide 2 Heading",
        description: "This is the description for Slide 2"
    },
    {
        id: 3,
        backgroundImage: "assets/img/catering.png",
        heading: "Slide 3 Heading",
        description: "This is the description for Slide 3"
    },
    {
        id: 4,
        backgroundImage: "assets/img/valet-parking.png",
        heading: "Slide 4 Heading",
        description: "This is the description for Slide 4"
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
        controls={false}  // Hide next/prev icons
        indicators={true} // Enable indicators
        interval={2000}   // Add 2-second interval for sliding
        className="custom-carousel"
      >
        {slidesData?.map((slide, i) => (
          <Carousel.Item key={i} style={{ height: '80vh' }}>
            <Image src={slide.backgroundImage} className="w-100 h-100" alt={`Slide ${i}`} />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
              <h3>{slide.heading}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

// Inline styles for the text content
const styles = {
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add some background for better visibility
        padding: "20px",
        borderRadius: "8px"
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "1rem"
    },
    description: {
        fontSize: "1.25rem"
    }
};

export default Hero;
