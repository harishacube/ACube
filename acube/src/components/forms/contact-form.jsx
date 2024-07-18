import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './forms.css'

const ContactForm = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <section className="contact-form-section py-5">
            <Container fluid>
                <h1 className="text-center mb-4 text-primary ft-wt-600 text-uppercase">How May We Assist You?</h1>
                <Form>
                    <Row className="mb-3 gap-3 gap-lg-0">
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formCompany">
                                <Form.Control type="text" placeholder="Company / Organization" />
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Company Email ID" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3 gap-3 gap-lg-0">
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formSelect">
                                <Form.Control aria-label="How can we help you?" as="select" value={selectedOption} onChange={handleSelectChange}>
                                    <option value="" disabled hidden>How Can We Help You?</option>
                                    <option value="Mobile app development">Mobile app development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Android app development">Android app development</option>
                                    <option value="IOS app development">IOS app development</option>
                                    <option value="Web app development">Web app development</option>
                                    <option value="IOT">IOT</option>
                                    <option value="AIML">AIML</option>
                                    <option value="QA Automation">QA Automation</option>
                                    <option value="RPA">RPA</option>
                                    <option value="Others">Others</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formPhone">
                                <PhoneInput
                                    country={'in'}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,
                                    }}
                                    placeholder="Mobile Number*"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Share Your Message" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="text-uppercase">
                            Get Started
                        </Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default ContactForm;
