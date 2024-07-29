import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PricingCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const plans = [
        {
            id: 1,
            price: "$15",
            duration: "Hourly (USD)",
            context: "We’ll provide a fully signed NDA for your Project’s Confidentiality"
        },
        {
            id: 2,
            price: "$2400",
            duration: "Monthly (USD)",
            context: "Senior React js developer 160 hours"
        },
        {
            id: 3,
            price: "Get a quote",
            duration: "for fixed cost solution",
            context: "Senior React js developer 160 hours"
        },
    ];

    const handleCardClick = (id) => {
        setSelectedCard(id);
    };

    return (
        <section className="pricing-cards-section">
            <Container fluid>
                <Row className="justify-content-center">
                    {plans.map((plan) => (
                        <Col key={plan.id} md={6} lg={4} className="mb-4">
                            <Card
                                className={`pricing-card h-100 ${selectedCard === plan.id ? 'selected' : ''}`}
                                onClick={() => handleCardClick(plan.id)}
                            >
                                <Card.Body className="d-flex flex-column text-white justify-content-center">
                                    <div className="pricing-label">
                                        <h5 className="mb-0">Starts with</h5>
                                    </div>
                                    <Card.Title className="text-center text-uppercase big-title">{plan.price}</Card.Title>
                                    <Card.Subtitle className="text-center mb-4">{plan.duration}</Card.Subtitle>
                                    <p className="text-capitalize mb-0">{plan.context}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col xs="12" className="text-center">
                        <Button className="text-uppercase" variant="primary">
                            Schedule a 30 mins call
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingCards;
