import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './services.css'
import ContactFormCard from "../../components/forms/contact-form-card";

const Services = ({ isMegaMenu }) => {
    const navigate = useNavigate();

    const services = [
        { name: "Artificial Intelligence", url: "/artificial-intelligence" },
        { name: "Web Application Development", url: "/web-app" },
        { name: "Blockchain Applications", url: "/blockchain-app" },
        { name: "UX/UI Services", url: "/uxui-services" },
        { name: "Software Testing", url: "/software-testing" },
        { name: "Analytics", url: "/analytics" },
        { name: "Robotic Process Automation", url: "/robotic-process-automation" },
        { name: "Mobility", url: "/mobility" },
        { name: "DevOps", url: "/devops" },
        { name: "Cloud", url: "/cloud-strategy" }
    ];

    return (
        <>
            <section className={`services-section ${isMegaMenu ? 'mega-menu-content' : ''}`} >
                <Container fluid>
                    <Row>
                        <Col xs="12" className="d-none d-lg-block">
                            <h1 className="text-primary ft-wt-600 mb-2 mb-lg-4">Build your software Product</h1>
                        </Col>
                        <Col xs="12" lg="7">
                            <p className="text-primary fw-normal d-none d-lg-block">
                                Our dedicated team mechanism is a one-of-a-kind approach and delivery mechanism that encourages transparency and dynamic team scaling. And provide the advantages of managed capacity as well as managed services model. For efficient execution, we provide a highly skilled development team, a testing professional, a Project manager and in-house experts for guidance. The complete product for the price of a developer.
                            </p>
                            <div className="d-flex gap-0 gap-lg-4 mt-0 mt-lg-5 flex-wrap">
                                <ul className="services-list list-unstyled">
                                    {services.slice(0, 6).map((service, index) => (
                                        <li key={index}>
                                            <Button variant="link" onClick={() => navigate(service.url)}>
                                                {service.name}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="list-unstyled services-list">
                                    {services.slice(6).map((service, index) => (
                                        <li key={index + 6}>
                                            <Button variant="link" onClick={() => navigate(service.url)}>
                                                {service.name}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col xs="12" lg="5" className="d-none d-lg-block">
                            <ContactFormCard />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
