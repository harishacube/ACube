import React from "react";
import medixo from '../../../images/home/medixo.svg'
import taxongo from '../../../images/home/tax-on-go.svg'
import tracxn from '../../../images/home/tracxn.svg'
import microsoft from '../../../images/home/microsoft.svg'
import aws from '../../../images/home/aws.svg'
import googleCloud from '../../../images/home/google-cloud.svg'
import ambitionbox from '../../../images/home/ambitionbox.svg'
import clutch from '../../../images/home/clutch-review.svg'
import { Container, Row, Col } from "react-bootstrap";

const ProductPartners = () => {
    return (
        <>
            <section className="product-partners-wrapper">
                <Container fluid>
                    <Row className="d-flex position-relative">
                        <Col xs="12" lg="6" className="product-section">
                            <h1 className="text-primary ft-wt-600 text-uppercase mb-5 text-center text-lg-start">Our Products</h1>
                            <Row>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={medixo} alt="medixo" loading="lazy" className="img-fluid" />
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={taxongo} alt="taxongo" loading="lazy" className="img-fluid" />
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={tracxn} alt="tracxn" loading="lazy" className="img-fluid" />
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={12} lg={1} className="d-none d-lg-flex justify-content-center">
                            <div className="vertical-divider"></div>
                        </Col>

                        <Col xs={12} lg={5} className="partner-section mt-5 mt-lg-0">
                            <h1 className="text-primary ft-wt-600 text-uppercase mb-5 text-center text-lg-start">Our Partners</h1>
                            <Row>
                                <Col xs="12">
                                    <a href="https://clutch.co/profile/acubetech-solutions#highlights" rel="noreferrer" target="_blank" >
                                        <img src={clutch} alt="clutch" loading="lazy" className="img-fluid" />
                                    </a>
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={microsoft} alt="microsoft" loading="lazy" className="img-fluid" />
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={aws} alt="aws" loading="lazy" className="img-fluid" />
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={googleCloud} alt="google-cloud" loading="lazy" className="img-fluid" />
                                </Col>
                                <Col xs="6" lg="6" className="d-flex align-items-center justify-content-center my-2">
                                    <img src={ambitionbox} alt="ambitionbox" loading="lazy" className="img-fluid" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ProductPartners;
