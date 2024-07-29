import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TechnologyList = ({ image, alt, title }) => {


    return (
        <section className="bg-primary">
            <Container fluid className="p-4 p-lg-5 text-center">
                <h1 className="text-white text-center text-uppercase mb-5 ft-wt-600">{title}</h1>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <div className="text-center mb-5">
                            <img src={image} alt={alt} className="img-fluid tech-img-block" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TechnologyList;
