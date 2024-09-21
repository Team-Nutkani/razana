import React from 'react';
import { Col, Row, Container, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare, faYoutube, faFacebookSquare, } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Variants for the column animations
    const columnVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and below the view
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Fade in and slide up
    };

    const quickLinks = [
        { value: "Home", href: "#!" },
        { value: "About", href: "#!" },
        { value: "Contact", href: "#!" },
        { value: "Blogs", href: "#!" },
    ];

    const socialMedia = [
        { value: "Hospitality", href: "#!" },
        { value: "Parking", href: "#!" },
        { value: "Catering", href: "#!" },
        { value: "Chauffeur", href: "#!" },
    ];

    const jobInfo = [
        { value: "Terms & Conditions", href: "#!" },
        { value: "Privacy Policy", href: "#!" },
        { value: "Refund Policy", href: "#!" },
    ];

    const sociaIcons = [
        {
            icon: faLinkedin,
            href: "#!",
        },
        {
            icon: faTwitterSquare,
            href: "#!",
        },
        {
            icon: faYoutube,
            href: "#!",
        },
        {
            icon: faFacebookSquare,
            href: "#!",
        }
    ];

    const QuickLinks = ({ qLink }) => (
        <li>
            <a href={qLink.href} className="text-white">{qLink.value}</a>
        </li>
    );
    QuickLinks.propTypes = {
        qLink: PropTypes.object.isRequired,
    };

    const SocialMedia = ({ media }) => (
        <li>
            <a href={media.href} className="text-white">{media.value}</a>
        </li>
    );
    SocialMedia.propTypes = {
        media: PropTypes.object.isRequired,
    };

    const JobInfo = ({ job }) => (
        <li>
            <a href={job.href} className="text-white">{job.value}</a>
        </li>
    );
    JobInfo.propTypes = {
        job: PropTypes.object.isRequired,
    };

    const LanguageItem = ({ language }) => (
        <option value={language.value}>{language.text}</option>
    );
    LanguageItem.propTypes = {
        language: PropTypes.object.isRequired,
    };

    const CurrencyItem = ({ currency }) => (
        <option value={currency.value}>{currency.text}</option>
    );
    CurrencyItem.propTypes = {
        currency: PropTypes.object.isRequired,
    };

    const NavigationItem = ({ item }) => (
        <a className="ms-2 text-white" href={item.href}>
            {item.value}
        </a>
    );
    NavigationItem.propTypes = {
        item: PropTypes.object.isRequired,
    };

    const SocialItem = ({ social }) => (
        <li>
            <a href={social.href} className="text-white">
                <FontAwesomeIcon icon={social.icon} />
            </a>
        </li>
    );
    SocialItem.propTypes = {
        social: PropTypes.object.isRequired,
    };

    return (
        <div className='bg-primary pt-5 mt-5'>
            <Container className='text-white'>
                <Row className="text-center text-sm-start border-bottom">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={columnVariants}
                        className="col-sm-6 col-lg-3 mt-4 mt-lg-0"
                    >
                        <Image className='logo' src='assets/img/logo.svg' />
                        <p>Rzana Parking Company</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={columnVariants}
                        className="col-sm-6 col-lg-3 mt-4 mt-lg-0"
                    >
                        <h5 className="text-white">Quick Links</h5>
                        <Nav className="flex-column ezy__footer7-quick-links">
                            {quickLinks.map((qLink, i) => (
                                <QuickLinks qLink={qLink} key={i} />
                            ))}
                        </Nav>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={columnVariants}
                        className="col-sm-6 col-lg-3 mt-4 mt-lg-0"
                    >
                        <h5 className="text-white">Services</h5>
                        <Nav className="flex-column ezy__footer7-quick-links">
                            {socialMedia.map((media, i) => (
                                <SocialMedia media={media} key={i} />
                            ))}
                        </Nav>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={columnVariants}
                        className="col-sm-6 col-lg-3 mt-4 mt-lg-0"
                    >
                        <h5 className="text-white">Privacy</h5>
                        <Nav className="flex-column ezy__footer7-quick-links">
                            {jobInfo.map((qLink, i) => (
                                <QuickLinks qLink={qLink} key={i} />
                            ))}

                        </Nav>
                        <Nav className="flex-row gap-3 ezy__footer7-quick-links">
                            {sociaIcons.map((social, i) => (
                                <SocialItem social={social} key={i} />
                            ))}
                        </Nav>
                    </motion.div>
                </Row>
                <Row className='py-3'>
                    <Col lg={8}>

                        <div className="mb-3 mb-lg-0 opacity-50 text-center text-lg-start ezy__footer7-copyright">
                            <span>Copyright &copy; 2024 Rzana, All rights reserved</span>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3 mb-lg-0 opacity-50 text-center text-lg-end ezy__footer7-copyright">
                            <span>Developed and Designed by <Link to='https://www.teamdgk.com/' className='text-white fw-bold text-decoration-none' target="_blank">TeamDGK</Link></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
