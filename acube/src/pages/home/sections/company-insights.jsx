import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useScroll } from "../../../context/scroll-context";


const CompanyInsights = () => {
    const { scrollToForm } = useScroll();
    return (
        <section className="company-insights-section">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs="12" lg="8" className="text-center text-lg-start p-4">
                        <div className="">
                            <h2 className="text-white big-title ft-wt-600 mb-4 text-uppercase">Engage, Innovate, and Transform</h2>
                            <p className="text-white">
                                At Acube, we prioritize your success by providing dynamic,
                                AI-driven Agile product teams that are always ready to propel your growth. We embody a connected world, delivering innovative and customer-focused IT solutions. Our commitment is to empower Enterprises, Associates, and Society to thrive and ascend together.
                            </p>
                            <Button variant="secondary" className="text-uppercase mt-4" onClick={scrollToForm}>know more</Button>
                        </div>
                    </Col>
                    <Col xs="12" lg="4" className="mb-4 mb-md-0 border-start">
                        <Row className="border-gradient no-gutters">
                            <Col xs="6" className="p-5 text-center">
                                <div className="big-title text-white mb-0 ft-wt-600">100+</div>
                                <p className="text-white">Delivered Projects</p>
                            </Col>
                            <Col xs="6" className="p-5 border-start text-center">
                                <div className="big-title text-white mb-0 ft-wt-600">11+</div>
                                <p className="text-white">
                                    Years of
                                    Experience</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="p-5 text-center">
                                <div className="big-title text-white ft-wt-600 mb-0">03+
                                </div>
                                <p className="text-white">Locations</p>
                            </Col>
                            <Col xs="6" className="p-5 border-start text-center">
                                <div className="big-title text-white ft-wt-600 mb-0">80+</div>
                                <p className="text-white">
                                    Employees
                                </p>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default CompanyInsights;
