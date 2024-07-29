import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const KeyInsights = ({ title, info = [] }) => {
    return (
        <section className="key-insights-section">
            <Container fluid className="px-4 px-lg-5 py-3">
                <Row>
                    <Col xs="12">
                        <div className="mb-3">
                            <h1 className="text-primary ft-wt-600 mb-4">{title}</h1>
                            <div className="content-wrapper">
                                {info.map((element, index) => (
                                    <React.Fragment key={index}>
                                        {element}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default KeyInsights;
