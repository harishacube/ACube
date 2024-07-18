import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './footer.css';
import AusFlag from '../../images/Australian-flag.svg'
import USAFlag from '../../images/American-flag.svg'
import IndianFlag from '../../images/Indian-flag.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/fb.svg'
import instagram from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'
import message from '../../images/chat.svg'
import whatsapp from '../../images/whatsapp.svg'

const year = new Date().getFullYear();

function Footer() {

    return (
        <footer className="footer">
            <Container fluid>
                <Row className="footer-addresses">
                    <Col xs="12" md="6">
                        <Row className="gap-3 gap-lg-0">
                            <Col xs="12">
                                <p className="mb-4 ft-wt-600">Global Presence</p>
                            </Col>
                            <Col xs="12" xl="6">
                                <div className="address-item">
                                    <div className="flag-circle">
                                        <img src={USAFlag} alt='USA Flag' loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <p>ACube USA LLC</p>
                                        <h6>401 Ryland St. STE 200-A,<br></br> Reno, WASHOE COUNTY,<br></br> NV 89502 USA</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" xl="6">
                                <div className="address-item">
                                    <div className="flag-circle">
                                        <img src={AusFlag} alt='Aus Flag' loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <p>Australia</p>
                                        <h6>ACubetech solutions <br></br>(Engenesis International)<br></br>8b/277 Lane Cove Rd<br></br>Macquarie Park, NSW<br></br>Australia, 2113</h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md="6" className="mt-4 mt-md-0">
                        <Row className="gap-3 gap-lg-0">
                            <Col xs="12">
                                <p className="mb-4 ft-wt-600">Offices and Development Centers</p>
                            </Col>
                            <Col xs="12" xl="6">
                                <div className="address-item">
                                    <div className="flag-circle">
                                        <img src={IndianFlag} alt='India Flag' loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <p>Bangalore</p>
                                        <h6>ACubetech solutions Pvt Ltd<br></br>Brigade IRV, 3rd Floor.<br></br>Nellurhalli, Whitefield,<br></br>Bangalore - 560066, India.</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" xl="6">
                                <div className="address-item">
                                    <div className="flag-circle">
                                        <img src={IndianFlag} alt='India Flag' loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <p>Chennai</p>
                                        <h6>ACubetech solutions Pvt Ltd<br></br>Akshaya CUBE, 6th Floor.<br></br>OMR Thoraipakkam, Near BSR Mall,<br></br>Chennai - 600096, India.</h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="gap-3 gap-lg-0">
                    <Col xs="12">
                        <p className="mb-4 ft-wt-600">On-Call Support</p>
                    </Col>
                    <Col xs="12" lg="8" xl="10">
                        <Row className=" gap-3 gap-xl-0">
                            <Col xs="12" xl="4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="flag-circle">
                                        <img src={USAFlag} alt="USA Flag" loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <a href="tel:+17753029805"><h4>+1 (775) 302-9805</h4></a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" xl="4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="flag-circle">
                                        <img src={IndianFlag} alt="India Flag" loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <a href="tel:+918042021000"><h4>+91 80 4202 1000</h4></a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" xl="4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="flag-circle">
                                        <img src={IndianFlag} alt="India Flag" loading="lazy" />
                                    </div>
                                    <div className="address-info">
                                        <a href="tel:+918042021000"><h4>+91 80 4202 1000</h4></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs="12" lg="4" xl="2" className="d-flex gap-4 align-items-center justify-content-start justify-content-lg-center justify-content-xl-end mt-4 mt-lg-0">
                        <div>
                            <Button variant="link" className="p-0">
                                <img src={message} alt="chat box" loading="lazy" />
                            </Button>
                        </div>
                        <div>
                            <Button variant="link" className="p-0">
                                <img src={whatsapp} alt="whatsapp" loading="lazy" />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <hr className="footer-divider" />
                <Row className="footer-bottom align-items-center gap-4 gap-lg-0">
                    <Col xs="12" lg="3">
                        <div className="social-icons justify-content-center justify-content-lg-start">
                            <a href="https://www.linkedin.com/company/acubetech-solutions-private-limited/mycompany/?viewAsMember=true" rel="noreferrer" target="_blank" className="social-icon">
                                <img src={linkedin} alt="linkedin" loading="lazy" />
                            </a>
                            <a href="https://www.instagram.com/acubetech/" className="social-icon" rel="noreferrer" target="_blank" >
                                <img src={instagram} alt="instagram" loading="lazy" />
                            </a>
                            <a href="https://www.youtube.com/@acubetechnologies" className="social-icon" rel="noreferrer" target="_blank" >
                                <img src={youtube} alt="youtube" loading="lazy" />
                            </a>
                            <a href="https://www.facebook.com/Acubetech/" className="social-icon" rel="noreferrer" target="_blank" >
                                <img src={facebook} alt="facebook" loading="lazy" />
                            </a>
                        </div>
                    </Col>
                    <Col xs="12" lg="6" className="text-center">
                        <h6 className="mb-0 ft-wt-500 opacity-70">Copyright © {year} Acube. All Rights Reserved. Privacy Policy</h6>
                    </Col>
                    <Col xs="12" lg="3" className="text-center text-lg-end">
                        <a href={`${process.env.PUBLIC_URL}/Acube-brochure.pdf`} download>
                            <Button variant="secondary" className="text-uppercase">Download Brochure</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
