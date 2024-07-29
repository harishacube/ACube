import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import reactjsImg from '../../../../images/hire-team/react-js/reactjs-img.webp'

const InfoSection = ({ image, alt, paragraphs = [] }) => {
    return (
        <section className="info-section">
            <Container fluid className="p-4 p-lg-5">
                <Row>
                    <Col xs="12" lg="7">
                        <div className="content-block mb-3">
                            <h1 className="text-primary mb-0 text-uppercase ft-wt-600 mb-4">
                                Hire React Developer To Strategically Execute Your Vision With Clarity
                            </h1>
                            <p className="text-primary">
                                Being the best ReactJS development company in India and USA, we are experts at building digitally advanced web apps that are engaging and delightful for your end-users. By harnessing the power of this modern framework, we can help you improvise your user experience and lead your way to higher conversion rates. Connect with us today to develop a bespoke React software - our skilled React developers are equipped with ES6 skills and have a rock-solid understanding of the JSX fundamentals.
                            </p>
                            <div>
                                <a href="https://calendly.com/acube/discovery-call?month=2024-07" rel="noreferrer" target="_blank">
                                    <Button className="text-uppercase" variant="primary">
                                        Book A discovery call
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center">
                        <img src={reactjsImg} alt="reactjs" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InfoSection;
