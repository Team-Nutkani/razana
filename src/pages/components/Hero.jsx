import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'react-bootstrap';


export default function Hero() {
    return (
        <div className="position-relative vh-100 w-100" id="hero">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <motion.div
                className="position-absolute top-50 start-50 translate-middle text-center text-white p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="display-4 mb-4">Welcome to Rzana Luxury Services</h1>
                <p className="lead">
                    Your premier choice for exceptional hospitality, catering, valet parking, and advanced technologies.
                    Experience chauffeured transportation and expert parking management. Elevate your experience with us.
                </p>
            </motion.div>
        </div>
    );
}
