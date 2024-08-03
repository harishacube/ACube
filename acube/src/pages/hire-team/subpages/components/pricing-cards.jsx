import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useScroll } from '../../../../context/scroll-context';

const PricingCards = ({ developer }) => {
    const { scrollToForm } = useScroll();

    const plans = [
        {
            id: 1,
            price: "$15",
            duration: "Hourly (USD)",
            context: `We’ll provide a fully signed NDA for your ${developer} Project’s Confidentiality`
        },
        {
            id: 2,
            price: "$2400",
            duration: "Monthly (USD)",
            context: `Senior ${developer} developer 160 hours`
        },
        {
            id: 3,
            price: "Get a quote",
            duration: "for fixed cost solution",
            context: `Ensure Timely Delivery within Budget for ${developer}`
        },
    ];

    return (
        <section className="pricing-cards-section" >
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="12" className="text-center mb-5">
                        <h1 className="text-primary mb-0 text-uppercase ft-wt-600 mb-4">Hire {developer} Developer As Per Your Need</h1>
                        <p className="text-primary">Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy</p>
                    </Col>
                    {plans.map((plan, index) => (
                        <Col key={plan.id} md={6} lg={4} className="mb-4">
                            <Card
                                className={`pricing-card h-100 ${index === 1 ? 'selected' : ''}`}
                                onClick={scrollToForm}
                            >
                                <Card.Body className="d-flex flex-column text-white justify-content-center">
                                    {index === 1 && (
                                        <div className="pricing-label">
                                            <h5 className="mb-0">Starts with</h5>
                                        </div>
                                    )}

                                    <Card.Title className="text-center text-uppercase big-title ft-wt-600">{plan.price}</Card.Title>
                                    <h4 className="text-center mb-4 ft-wt-600">{plan.duration}</h4>
                                    <h6 className="text-capitalize mb-0 ft-wt-500">{plan.context}</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col xs="12" className="text-center">
                        <Button className="text-uppercase" variant="primary" onClick={scrollToForm}>
                            Schedule a developer interview
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingCards;
