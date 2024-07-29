import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import adImg from '../../../../images/services/ad-img.webp'

const Advertisement = () => {
    return (
        <>
            <section className="ad-section">
                <Container fluid className="px-4 px-lg-5">
                    <Row>
                        <Col xs="12" lg="6">
                            <div className="content-block mb-3">
                                <h1 className="text-white mb-0 text-uppercase ft-wt-600 mb-2">Enjoy a Complimentary 30-Minute Strategy Session with a Data and AI Specialist</h1>
                                <p className="text-white mb-5">Begin Your Journey by Consulting Our Experts on Scaling Business Insights with Advanced Data Foundations, Modernization, and Platform Management.</p>
                                <div className="mb-2">
                                    <a href="https://calendly.com/acube/discovery-call?month=2024-07" rel="noreferrer" target="_blank">
                                        <Button className="text-uppercase" variant="secondary">
                                            Let's talk
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" lg="6">
                            <img src={adImg} alt="ad-img" loading="lazy" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Advertisement