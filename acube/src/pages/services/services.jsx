import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './services.css'
import ContactFormCard from "../../components/forms/contact-form-card";

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        "Artificial Intelligence",
        "Web Application Development",
        "Blockchain Applications",
        "UX/UI Services",
        "Software Testing",
        "Analytics",
        "Robotic Process Automation",
        "Mobility",
        "DevOps",
        "Cloud"
    ];

    return (
        <>
            <section className="services-section">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h1 className="text-primary ft-wt-600 mb-4">Build your software Product</h1>
                        </Col>
                        <Col xs="12" lg="7">
                            <p className="text-primary fw-normal">
                                Our dedicated team mechanism is a one-of-a-kind approach and delivery mechanism that encourages transparency and dynamic team scaling. And provide the advantages of managed capacity as well as managed services model. For efficient execution, we provide a highly skilled development team, a testing professional, a Project manager and in-house experts for guidance. The complete product for the price of a developer.
                            </p>
                            <div className="d-flex gap-4 mt-5">
                                <ul className="services-list list-unstyled">
                                    {services.slice(0, 6).map((service, index) => (
                                        <li key={index}>
                                            <Button variant="link">
                                                {service}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="list-unstyled services-list">
                                    {services.slice(6).map((service, index) => (
                                        <li key={index + 6}>
                                            <Button variant="link">
                                                {service}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col xs="12" lg="5">
                            <ContactFormCard />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
