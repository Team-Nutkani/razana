import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

export default function Hero() {
    // Variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the animation of child elements
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="position-relative vh-100 w-100" id="hero">
            {/* Animate the background opacity */}
            <motion.div
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.2 }}
            ></motion.div>

            {/* Responsive container for padding on smaller devices */}
            <motion.div
                className="container position-absolute top-50 start-50 translate-middle text-white p-4"
                variants={containerVariants} // Applying stagger container variants
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="display-4 mb-4 text-center text-md-start" // Responsive text alignment
                    variants={textVariants} // Animate the heading text
                >
                    Welcome to Rzana Luxury Services
                </motion.h1>

                <motion.p
                    className="lead text-center text-md-start" // Responsive text alignment
                    variants={textVariants} // Animate the paragraph text
                >
                    Your premier choice for exceptional hospitality, catering, valet parking, and advanced technologies.
                    Experience chauffeured transportation and expert parking management. Elevate your experience with us.
                </motion.p>

                <motion.div className="text-center text-md-start" variants={buttonVariants}> {/* Animate the button */}
                    <Button variant="light">Discover more</Button>
                </motion.div>
            </motion.div>
        </div>
    );
}
