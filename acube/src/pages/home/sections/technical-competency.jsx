import React from "react";
import openAI from '../../../images/home/open-ai.svg';
import generativeAI from '../../../images/home/generative-ai.svg';
import reactjsx from '../../../images/home/react.svg';
import python from '../../../images/home/python.svg';
import flutter from '../../../images/home/flutter.svg';
import amazon from '../../../images/home/amazon.svg';
import ios from '../../../images/home/ios.svg';
import android from '../../../images/home/android.svg';
import uiPath from '../../../images/home/ui-path.svg';
import mobileProgramming from '../../../images/home/mobile-programming.svg';
import blueprism from '../../../images/home/blue-prism.svg';
import dl4j from '../../../images/home/dl4j.svg';
import selenium from '../../../images/home/selenium.svg';
import nodeJs from '../../../images/home/node-js.svg';
import figma from '../../../images/home/figma.svg';
import devops from '../../../images/home/devops.svg';
import dotnet from '../../../images/home/dot-net.svg';
import go from '../../../images/home/go.svg';
import { Container, Row, Col } from "react-bootstrap";

const TechnicalCompetency = () => {
    return (
        <>
            <section className="technical-competency-wrapper">
                <Container className="content-block">
                    <div className="text-center mb-4">
                        <h1 className="big-title ft-wt-600 text-uppercase text-primary">Technical Competency</h1>
                        <p className="mb-0 text-primary">
                            Leverage our expertise in tools and technologies for transformative solutions, facilitating faster development, error-free coding, and numerous lasting benefits for your enterprise.
                        </p>
                    </div>
                    <div className="brands-section mx-auto">
                        <Row className="brand-logos-row">
                            <Col xs="6" lg="3">
                                <img src={openAI} alt="openAI" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={generativeAI} alt="generativeAI" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={reactjsx} alt="react" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={python} alt="python" loading="lazy" />
                            </Col>
                        </Row>
                        <Row className="brand-logos-row">
                            <Col xs="6" lg="3">
                                <img src={flutter} alt="flutter" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={amazon} alt="amazon" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={ios} alt="ios" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={android} alt="android" loading="lazy" />
                            </Col>
                        </Row>
                        <Row className="brand-logos-row">
                            <Col xs="6" lg="3">
                                <img src={uiPath} alt="uiPath" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={mobileProgramming} alt="mobile Programming" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={blueprism} alt="blueprism" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={dl4j} alt="dl4j" loading="lazy" />
                            </Col>
                        </Row>
                        <Row className="brand-logos-row">
                            <Col xs="6" lg="3">
                                <img src={selenium} alt="selenium" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={nodeJs} alt="nodeJs" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={figma} alt="figma" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={devops} alt="devops" loading="lazy" />
                            </Col>
                        </Row>
                        <Row className="brand-logos-row">
                            <Col xs="6" lg="3">
                                <img src={dotnet} alt="dotnet" loading="lazy" />
                            </Col>
                            <Col xs="6" lg="3">
                                <img src={go} alt="go" loading="lazy" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TechnicalCompetency;
