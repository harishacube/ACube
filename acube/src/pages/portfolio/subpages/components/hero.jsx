import React from "react";
import { Button, Container } from "react-bootstrap";
import { useScroll } from "../../../../context/scroll-context";

const HeroBanner = ({ title, content, backgroundImage }) => {
    const { scrollToForm } = useScroll();
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container fluid className="p-4 p-lg-5">
                <div className="content-block mb-3">
                    <h1 className="text-white mb-0 text-uppercase ft-wt-600 mb-4">{title}</h1>
                    <p className="text-white mb-5">{content}</p>
                    <div>
                        <Button className="text-uppercase" variant="secondary" onClick={scrollToForm}>
                            <h5 className="mb-0 text-primary">Talk To Our Expert</h5>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroBanner;
