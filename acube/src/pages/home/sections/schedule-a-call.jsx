import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aiHand from '../../../images/home/ai-hand.webp';

const ScheduleCall = () => {
    return (
        <section className="schedule-call-wrapper">
            <Container fluid>
                <div className="link-wrapper mb-2 text-uppercase text-center flex-wrap gap-3">
                    <a href="#link1" className="text-decoration-underline">Artificial Intelligence</a>
                    <a href="#link2" className="text-decoration-underline">IoT</a>
                    <a href="#link3" className="text-decoration-underline">Machine Learning</a>
                    <a href="#link4" className="text-decoration-underline">Cloud</a>
                    <a href="#link5" className="text-decoration-underline">Blockchain Applications</a>
                </div>
                <Row className="align-items-center no-gutters">
                    <Col xs="12" lg="6" className="mb-4 mb-md-0">
                        <img src={aiHand} alt="AIPoster" loading="lazy" className="img-fluid w-100" style={{ marginLeft: '-15px' }} />
                    </Col>
                    <Col xs="12" lg="6" className="text-center text-lg-end px-4">
                        <h2 className="text-white big-title ft-wt-600 mb-4">Driving Your Business with Cutting-Edge Innovation</h2>
                        <p className="text-white">
                            At Acube, our commitment to innovation and deep industry expertise ensures you stay ahead of the curve.
                        </p>
                        <Button variant="secondary" className="text-uppercase mt-5">Schedule a call</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ScheduleCall;
