import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const GraphSection = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && svgRef.current) {
                        svgRef.current.classList.add('animate');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (svgRef.current) {
            observer.observe(svgRef.current);
        }

        return () => {
            if (svgRef.current) {
                observer.unobserve(svgRef.current);
            }
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="graph-svg"
        >
            <path
                d="M0,150 Q100,50 200,100 T400,80 T600,120 T800,90 T1000,110"
                fill="none"
                stroke="#FFA500"
                strokeWidth="6"
                className="graph-path"
            />
        </svg>
    );
};

const Graph = () => {
    return (
        <footer className="bg-black text-white py-5 vh-100">
            <Container fluid>
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="graph-container mb-4">
                            <GraphSection />
                        </div>
                        <div className="mt-3">
                            <h2 className="text-orange mb-0">GET IN TOUCH</h2>
                            <a
                                href="mailto:INFO@BLACKORANGELIVE.COM"
                                className="text-orange text-decoration-none fs-5"
                            >
                                INFO@BLACKORANGELIVE.COM
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div>
                                <h3 className="text-orange fs-5">RIYADH</h3>
                                <p className="small mb-0">
                                    7235 Al Uraya Unit No 30
                                    <br />
                                    Riyadh 12444 - 2392
                                    <br />
                                    P.O. Box 50060 Al Ulaya
                                    <br />
                                    Riyadh, KSA
                                    <br />
                                    Tel: +966 11 466 8381
                                </p>
                            </div>
                            <div>
                                <h3 className="text-orange fs-5">JEDDAH</h3>
                                <p className="small mb-0">
                                    4th Floor, Randa Tower
                                    <br />
                                    Building 7815
                                    <br />
                                    King Abdulaziz Branch Road
                                    <br />
                                    Zip Code 23523
                                    <br />
                                    Al Nahdah Dist
                                    <br />
                                    Jeddah, KSA
                                </p>
                            </div>
                            <div>
                                <h3 className="text-orange fs-5">DUBAI</h3>
                                <p className="small mb-0">
                                    Warehouse No. 902
                                    <br />
                                    Al Quoz Industrial Area 1
                                    <br />
                                    P.O. Box 123413
                                    <br />
                                    Dubai, UAE
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </Container>
        </footer>
    );
};

export default Graph;
