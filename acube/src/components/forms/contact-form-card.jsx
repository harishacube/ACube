import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './forms.css';

const ContactFormCard = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <section className="contact-form-section  py-3 py-lg-0">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <Card className="card-block mb-4">
                            <Card.Body className="px-0">
                                <Card.Title className="mb-2 text-primary ft-wt-600">
                                    Schedule a Free Consultation
                                </Card.Title>
                                <Card.Subtitle className="mb-4 text-primary">
                                    So our team can reach out to you on time
                                </Card.Subtitle>
                                <Form>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formCompany" className="mb-3">
                                        <Form.Control type="text" placeholder="Company / Organization" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Control type="email" placeholder="Company Email ID" />
                                    </Form.Group>
                                    <Form.Group controlId="formSelect" className="mb-3">
                                        <Form.Control as="select" aria-label="How can we help you?" value={selectedOption} onChange={handleSelectChange}>
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
                                    <Form.Group controlId="formPhone" className="mb-3">
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
                                    <Form.Group controlId="formMessage" className="mb-3">
                                        <Form.Control as="textarea" rows={3} placeholder="Share Your Message" />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button variant="primary" type="submit" className="text-uppercase">
                                            Get Started
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactFormCard;
