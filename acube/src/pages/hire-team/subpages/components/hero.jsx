import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import pricing from '../../../../images/hire-team/best-price.svg'
import projects from '../../../../images/hire-team/code.svg'
import client from '../../../../images/hire-team/customer-care.svg'
import { useScroll } from "../../../../context/scroll-context";

const HeroBanner = ({ title, backgroundImage, content, bannerImage, alt }) => {
    const { scrollToForm } = useScroll();
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container fluid className="p-4 p-lg-5">
                <Row>
                    <Col xs="12" lg="8">
                        <div className="content-block mb-3">
                            <h1 className="text-white mb-0 text-capitalize ft-wt-600 mb-4">{title}</h1>
                            <p className="text-white mb-5">{content}</p>
                            <div>
                                <Button className="text-uppercase" variant="secondary" onClick={scrollToForm}>
                                    <h5 className="mb-0 text-primary">Apply for free 2 weeks trial</h5>
                                </Button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-5 flex-wrap my-5">
                            <div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <img src={pricing} alt="pricing" />
                                    </div>
                                    <h5 className="text-white mb-0">
                                        Plan and Pricing
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <img src={projects} alt="projects" />
                                    </div>
                                    <h5 className="text-white mb-0">
                                        1000+ Reactjs Projects
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <img src={client} alt="client" />
                                    </div>
                                    <h5 className="text-white mb-0">
                                        100% Client Satisfaction
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="4">
                        <div className="images-block position-relative">
                            <img src={bannerImage} alt={alt} className="img-fluid banner-img" loading="lazy" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroBanner;
