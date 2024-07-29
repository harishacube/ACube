import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useScroll } from '../../../../context/scroll-context';

const ServicesSection = ({ image, alt }) => {
    const { scrollToForm } = useScroll();

    return (
        <section className="bg-primary">
            <Container fluid className="p-4 p-lg-5 text-center">
                <h1 className="text-white text-center text-uppercase mb-5 ft-wt-600">What Can We Do For You?</h1>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <div className="text-center mb-5">
                            <img src={image} alt={alt} className="img-fluid" loading="lazy" />
                        </div>
                        <div className="p-2">
                            <Button variant="secondary" className="text-uppercase" href="#apply-trial" onClick={scrollToForm}>Apply for FREE 2-weeks trial</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;
