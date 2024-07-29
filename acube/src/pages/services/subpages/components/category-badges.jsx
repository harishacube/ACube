import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const FieldBadges = () => {
    const icons = [
        { title: 'Online School' },
        { title: 'Fintech' },
        { title: 'Manufacturing' },
        { title: 'Oil and Gas' },
        { title: 'Banking' },
        { title: 'Healthcare' },
        { title: 'Real Estate' },
        { title: 'Logistics' },
    ];

    return (
        <section>
            <Container fluid className="p-4 p-lg-5 fields-badge-wrapper">
                <Row className="text-center">
                    <Col xs="12">
                        <h1 className="ft-wt-600 text-center mb-4 text-primary">Achieve Industry Leadership with Our Cutting-Edge AI Solutions</h1>
                    </Col>
                    <div className="d-flex gap-3 justify-content-center align-items-center mx-auto badges-block flex-wrap">
                        {icons.map((icon, index) => (
                            <div key={index}>
                                <h2>
                                    <Badge bg="secondary" className="d-flex flex-column align-items-center justify-content-center p-3">
                                        <p className="ft-wt-600 mb-0">{icon.title}</p>
                                    </Badge>
                                </h2>
                            </div>
                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default FieldBadges;
