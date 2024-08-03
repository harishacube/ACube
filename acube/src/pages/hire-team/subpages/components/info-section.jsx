import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const InfoSection = ({ content, title, image, alt = [] }) => {
    return (
        <section className="info-section">
            <Container fluid className="p-4 p-lg-5">
                <Row>
                    <Col xs="12" lg="7">
                        <div className="content-block mb-3">
                            <h1 className="text-primary mb-0 text-uppercase ft-wt-600 mb-4">
                                {title}
                            </h1>
                            <p className="text-primary">
                                {content}
                            </p>
                            <div>
                                <a href="https://calendly.com/acube/discovery-call?month=2024-07" rel="noreferrer" target="_blank">
                                    <Button className="text-uppercase" variant="primary">
                                        Book A discovery call
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center">
                        <img src={image} alt={alt} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InfoSection;
