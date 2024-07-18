import React, { useEffect } from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import ContactFormCard from "../../components/forms/contact-form-card";
import './hire-team.css'

const HireTeam = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        "Frontend",
        "Backend",
        "Software",
        "Mobile App",
        "Automation",
        "Platforms",
        "Artificial Intelligence",
        "Machine Learning",
        "DevOps",
        "Data Science",
        "Cloud"
    ];

    const serviceDetails = {
        "Frontend": [
            "Angular Developer",
            "React Developer",
            "Vue Developer",
            "Javascript Developer",
            "UI/UX Developer",
            "HTML/CSS Developer",
            "Tailwind CSS Developer",
        ],
        "Backend": [
            "NodeJS Developer",
            "GoLang Developer",
            "PHP Developer",
            "ASP.NET Developer",
        ],
        "Fullstack": [
            "MERN Stack Developer",
            "MEAN Stack Developer",
            "Fullstack Java Developer",
            "Fullstack Python Developer",
        ],
        "Mobile App": [
            "IOS Developer",
            "Android Developer",
            "React Native Developer",
            "Flutter Developer",
            "Ionic Developer",
            "Xamarin Developer",
        ],
        "Automation": [
            "Automation Test Engineer",
            "RPA Developer",
        ],
        "Platforms": [
            "AWS Cloud Developer",
            "Azure Cloud Developer",
            "GCP Cloud Developer",
        ],
        "Artificial Intelligence": [
            "Machine Learning Engineer",
            "AI Developer",
        ],
        "Machine Learning": [
            "Machine Learning Engineer",
        ],
        "DevOps": [
            "DevOps Engineer",
        ],
        "Data Science": [
            "Data Scientist",
        ],
        "Cloud": [
            "AWS Cloud Developer",
            "Azure Cloud Developer",
            "GCP Cloud Developer",
        ],
        "Software": [
            "Blockchain Developer",
            "UI/UX Developer",
            "Power BI Developer",
            "Manual QA Engineer",
            "Security Test Engineer",
        ],

    };

    return (
        <>
            <section className="hire-team-section">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h1 className="text-primary ft-wt-600 mb-0">Hire Team</h1>
                        </Col>
                        <Col xs="12" lg="7">
                            <Tab.Container id="left-tab" defaultActiveKey="Frontend">
                                <Row className="mt-5">
                                    <Col xs="12" lg="5" className="border-end">
                                        <Nav variant="pills" className="flex-column gap-3">
                                            {services.map((service, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={service} className="text-start">
                                                        {service}
                                                    </Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </Col>
                                    <Col xs="12" lg="7">
                                        <Tab.Content>
                                            {services.map((service, index) => (
                                                <Tab.Pane eventKey={service} key={index}>
                                                    <ul className="list-unstyled d-flex flex-column gap-2">
                                                        {serviceDetails[service]?.map((detail, idx) => (
                                                            <li key={idx}>
                                                                <Button variant="link" className="text-uppercase fw-normal">
                                                                    {detail}
                                                                </Button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
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

export default HireTeam;
