import React from "react";
import { Button, Container } from "react-bootstrap";
import briefcase from '../../../../images/services/briefcase.svg';
import rocket from '../../../../images/services/rocket.svg';
import customerService from '../../../../images/services/customer-service.svg';
import { useScroll } from "../../../../context/scroll-context";

const HeroBanner = ({ title, content, backgroundImage }) => {
    const { scrollToForm } = useScroll();
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container fluid className="p-4 p-lg-5">
                <div className="content-block mb-3">
                    <h1 className="text-white mb-0 text-uppercase ft-wt-600 mb-4">{title}</h1>
                    <p className="text-white mb-4">{content}</p>
                    <div>
                        <Button className="text-uppercase" variant="secondary" onClick={scrollToForm}>
                            <h5 className="mb-0 text-primary">Request a free Consultation</h5>
                        </Button>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-5 flex-wrap mt-5">
                    <div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                <img src={briefcase} alt="experience" />
                            </div>
                            <h5 className="text-white mb-0">
                                15+ Years of Experience
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                <img src={customerService} alt="customerService" />
                            </div>
                            <h5 className="text-white mb-0">
                                1000+ Projects Completed
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex gap-2 align-items-center">
                            <div>
                                <img src={rocket} alt="rocket" />
                            </div>
                            <h5 className="text-white mb-0">
                                Flexible Engagement Models
                            </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroBanner;
