import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ContactFormCard from "../../components/forms/contact-form-card";
import carretDown from "../../images/chevron-down.svg";
import './hire-team.css';

const HireTeam = ({ isMegaMenu }) => {
    const navigate = useNavigate();

    const services = [
        "Frontend",
        "Backend",
        "Mobile App",
        "Automation",
        "Artificial Intelligence",
        "Machine Learning",
        "DevOps",
        "Data Science",
        "Cloud"
    ];

    const serviceDetails = {
        "Frontend": [
            { name: "Angular Developer", url: "/hire-angularjs-developer" },
            { name: "React Developer", url: "/hire-reactjs-developer" },
            { name: "Vue Developer", url: "/hire-vuejs-developer" },
            { name: "UI/UX Developer", url: "/hire-uiux-developer" },
            { name: "HTML/CSS Developer", url: "/hire-htmlcss-developer" },
        ],
        "Backend": [
            { name: "Node Developer", url: "/hire-nodejs-developer" },
            { name: "Golang Developer", url: "/hire-golang-developer" },
            { name: "Laravel Developer", url: "/hire-laravel-developer" },
            { name: ".NET Developer", url: "/hire-aspnet-developer" },
            { name: ".NET Core Developer", url: "/hire-dotnetcore-developer" },
            { name: "Java Developer", url: "/hire-java-developer" },
            { name: "Python Developer", url: "/hire-python-developer" },
            { name: "PHP Developer", url: "/hire-php-developer" },
            { name: "Django Developer", url: "/hire-django-developer" },
            { name: "C# Developer", url: "/hire-csharp-developer" },
        ],
        "Mobile App": [
            { name: "React Native Developer", url: "/hire-reactnative-developer" },
            { name: "Flutter Developer", url: "/hire-flutter-developer" },
            { name: "Ionic Developer", url: "/hire-ionic-developer" },
            { name: "IOS Developer", url: "/hire-ios-developer" },
            { name: "Android Developer", url: "/hire-android-developer" },
        ],
        "Automation": [
            { name: "RPA Developer", url: "/hire-rpa-developer" }
        ],
        "Artificial Intelligence": [
            { name: "AI Developer", url: "" },  // Placeholder
            { name: "ChatGPT Developer", url: "" },  // Placeholder
            { name: "OpenAI Developer", url: "" },  // Placeholder
            { name: "Prompt Engineer", url: "" },  // Placeholder
            { name: "AIOps Engineers", url: "" },  // Placeholder
        ],
        "Machine Learning": [
            { name: "ML Developer", url: "/hire-ml-developer" },
        ],
        "DevOps": [
            { name: "DevOps Developer", url: "/hire-devops-developer" },
        ],
        "Data Science": [
            { name: "Data Scientist", url: "" },  // Placeholder
            { name: "PowerBI Consultant", url: "/hire-powerbi-developer" },
            { name: "Data Engineer", url: "" },  // Placeholder
        ],
        "Cloud": [
            { name: "AWS Developer", url: "/hire-awscloud-developer" },
            { name: "Azure Developer", url: "/hire-azurecloud-developer" },
        ]
    };

    const [activeService, setActiveService] = useState(services[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [openContent, setOpenContent] = useState({}); // State to track open content

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleContent = (service) => {
        setOpenContent(prevState => ({
            ...prevState,
            [service]: !prevState[service]
        }));
    };

    return (
        <section className={`hire-team-section ${isMegaMenu ? 'mega-menu-content' : ''}`}>
            <Container fluid>
                <Row>
                    <Col xs="12" className="d-none d-lg-block">
                        <h1 className="text-primary ft-wt-600 mb-0">Hire Team</h1>
                    </Col>
                    <Col xs="12" lg="7">
                        <Tab.Container id="left-tab" activeKey={activeService}>
                            <Row className="mt-lg-5 mt-0">
                                <Col xs="12" lg="5" className="border-none border-lg-end">
                                    <Nav variant="pills" className="flex-column gap-2 gap-lg-3">
                                        {services.map((service, index) => (
                                            <React.Fragment key={index}>
                                                <Nav.Item>
                                                    <Nav.Link
                                                        eventKey={service}
                                                        className="text-start"
                                                        onClick={() => {
                                                            setActiveService(service);
                                                            toggleContent(service);
                                                        }}
                                                    >
                                                        {service}
                                                        {isMobile && (
                                                            <img
                                                                src={carretDown}
                                                                alt="carret"
                                                                className={`carret ${openContent[service] ? 'rotate-up' : ''}`}
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </Nav.Link>
                                                </Nav.Item>
                                                {isMobile && openContent[service] && (
                                                    <Tab.Content className="mobile-tab-content pt-0 mt-0">
                                                        <Tab.Pane eventKey={service}>
                                                            <ul className="list-unstyled d-flex flex-column gap-2">
                                                                {serviceDetails[service]?.map((detail, idx) => (
                                                                    <li key={idx}>
                                                                        <Button
                                                                            variant="link"
                                                                            className="text-uppercase fw-normal"
                                                                            onClick={() => navigate(detail.url)}
                                                                        >
                                                                            {detail.name}
                                                                        </Button>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Nav>
                                </Col>
                                {!isMobile && (
                                    <Col xs="12" lg="7">
                                        <Tab.Content>
                                            {services.map((service, index) => (
                                                <Tab.Pane eventKey={service} key={index}>
                                                    <ul className="list-unstyled d-flex flex-column gap-2">
                                                        {serviceDetails[service]?.map((detail, idx) => (
                                                            <li key={idx}>
                                                                <Button
                                                                    variant="link"
                                                                    className="text-uppercase fw-normal"
                                                                    onClick={() => navigate(detail.url)}
                                                                >
                                                                    {detail.name}
                                                                </Button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                )}
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col xs="12" lg="5" className="d-none d-lg-block">
                        <ContactFormCard />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HireTeam;
