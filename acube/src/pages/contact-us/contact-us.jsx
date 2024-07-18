import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './contact-us.css'
import ContactFormCard from "../../components/forms/contact-form-card";
import AusFlag from '../../images/Australian-flag.svg'
import USAFlag from '../../images/American-flag.svg'
import IndianFlag from '../../images/Indian-flag.svg'
import BrandsCarousel from "../../components/carousels/brands-carousel";
import TestimonialCarousel from "../../components/carousels/testimonial-carousel";
import ContactForm from "../../components/forms/contact-form";
import TestimonialVideoPlayer from "../../components/videos/testimonial-video";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="contact-us-section">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h1 className="text-primary ft-wt-600 mb-0">Contact Us</h1>
                        </Col>
                        <Col xs="12" lg="7" className="bg-img">
                            <Row>
                                <Col xs="12">
                                    <Row className="gap-3 gap-lg-0 mt-5 mb-120">
                                        <Col xs="12" xl="6">
                                            <div className="address-item">
                                                <div className="flag-circle">
                                                    <img src={USAFlag} alt='USA Flag' loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <h1 className="ft-wt-500">ACube USA LLC</h1>
                                                    <h4>401 Ryland St. STE 200-A,<br></br> Reno, WASHOE COUNTY,<br></br> NV 89502 USA</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="12" xl="6">
                                            <div className="address-item">
                                                <div className="flag-circle">
                                                    <img src={AusFlag} alt='Aus Flag' loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <h1 className="ft-wt-500">Australia</h1>
                                                    <h4>ACubetech solutions <br></br>(Engenesis International)<br></br>8b/277 Lane Cove Rd<br></br>Macquarie Park, NSW<br></br>Australia, 2113</h4>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" className="mt-4 mt-md-0">
                                    <Row className="gap-3 gap-lg-0">
                                        <Col xs="12" xl="6">
                                            <div className="address-item">
                                                <div className="flag-circle">
                                                    <img src={IndianFlag} alt='India Flag' loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <h1 className="ft-wt-500">Bangalore</h1>
                                                    <h4>ACubetech solutions Pvt Ltd<br></br>Brigade IRV, 3rd Floor.<br></br>Nellurhalli, Whitefield,<br></br>Bangalore - 560066, India.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="12" xl="6">
                                            <div className="address-item">
                                                <div className="flag-circle">
                                                    <img src={IndianFlag} alt='India Flag' loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <h1 className="ft-wt-500">Chennai</h1>
                                                    <h4>ACubetech solutions Pvt Ltd<br></br>Akshaya CUBE, 6th Floor.<br></br>OMR Thoraipakkam, Near BSR Mall,<br></br>Chennai - 600096, India.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" lg="5">
                            <ContactFormCard />
                        </Col>
                        <Col xs="12" className="mt-3">
                            <Row className="gap-3 gap-lg-0">
                                <Col xs="12">
                                    <p className="mb-4 ft-wt-600">On-Call Support</p>
                                </Col>
                                <Col xs="12">
                                    <Row className=" gap-3 gap-md-0">
                                        <Col xs="12" md="4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="flag-circle">
                                                    <img src={USAFlag} alt="USA Flag" loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <a href="tel:+17753029805" className="text-primary"><h4>+1 (775) 302-9805</h4></a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="flag-circle">
                                                    <img src={AusFlag} alt="Aus Flag" loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <a href="tel:+918042021000" className="text-primary"><h4>+91 80 4202 1000</h4></a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="flag-circle">
                                                    <img src={IndianFlag} alt="India Flag" loading="lazy" />
                                                </div>
                                                <div className="address-info">
                                                    <a href="tel:+918042021000" className="text-primary"><h4>+91 80 4202 1000</h4></a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <TestimonialVideoPlayer />
                <BrandsCarousel />
                <TestimonialCarousel />
                <ContactForm />
            </section>
        </>
    );
};

export default ContactUs;
