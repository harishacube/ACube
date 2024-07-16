import React from "react";
import AI from '../../../images/home/artificial-intelligence.svg'
import UI from '../../../images/home/ui.svg'
import mobileDevelopment from '../../../images/home/mobile-development.svg'
import cube from '../../../images/home/cube.svg'
import { Button, Container } from "react-bootstrap";

const ExploreOfferings = () => {
    return (
        <>
            <section className="explore-offerings-wrapper">
                <Container className="content-block">
                    <div className="text-center mb-4">
                        <h1 className="big-title ft-wt-600 text-uppercase text-primary">Explore Our Offerings</h1>
                        <p className="mb-0 text-primary">Embark on Your Digital Transformation with Our User-Centric Solutions</p>
                    </div>
                    <div className="offerings-section">
                        <div className="solution-item">
                            <img src={AI} alt="artificial intelligence" loading="lazy" />
                            <h6 className="ft-wt-600 text-uppercase text-primary">AI/ML</h6>
                        </div>
                        <div className="solution-item">
                            <img src={mobileDevelopment} alt="mobile development" loading="lazy" />
                            <h6 className="ft-wt-600 text-uppercase text-primary">Web Apps Development</h6>
                        </div>
                        <div className="solution-item">
                            <img src={cube} alt="blockchain" loading="lazy" />
                            <h6 className="ft-wt-600 text-uppercase text-primary">Blockchain Developer</h6>
                        </div>
                        <div className="solution-item">
                            <img src={UI} alt="ui" loading="lazy" />
                            <h6 className="ft-wt-600 text-uppercase text-primary">UX/UI Services</h6>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button variant="primary" className="text-uppercase">Explore All</Button>
                    </div>
                </Container>
            </section>
        </>
    )
};

export default ExploreOfferings