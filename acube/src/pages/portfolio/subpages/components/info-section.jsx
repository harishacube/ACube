import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InfoSection = ({ image, alt, paragraphs = [] }) => {
    return (
        <section className="info-section">
            <Container fluid className="p-4 p-lg-5">
                <Row>
                    <Col xs="12" lg="7">
                        <div className="content-block mb-3">
                            {paragraphs.map((paragraph, index) => (
                                <div className="text-primary" key={index}>
                                    {paragraph}
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs="12" lg="5">
                        <img src={image} alt={alt} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InfoSection;
