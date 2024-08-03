import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './forms.css';

const ContactFormCard = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        const handleResize = () => {
            // Trigger reflow/repaint to handle ResizeObserver notifications
            document.body.style.display = 'none';
            document.body.style.display = 'block';
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormValues({ ...formValues, phone: value });
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact-form-section py-3 py-lg-0">
            <div className="custom-container">
                <div className="card-block">
                    <div className="mb-2 text-primary ft-wt-600 card-title h5">Schedule a Free Consultation</div>
                    <div className="mb-4 text-primary card-subtitle h6">So our team can reach out to you on time</div>
                    <Form onSubmit={handleSubmit} id="contact-form-card">
                        <Form.Group controlId="consultationFormName" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="consultationFormCompany" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Company / Organization"
                                name="company"
                                value={formValues.company}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="consultationFormEmail" className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Company Email ID"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="consultationFormSelect" className="mb-3">
                            <Form.Control
                                as="select"
                                aria-label="How can we help you?"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
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
                        <Form.Group controlId="consultationFormPhone" className="mb-3">
                            <PhoneInput
                                country={'us'}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                                placeholder="Mobile Number*"
                                value={formValues.phone}
                                onChange={handlePhoneChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="consultationFormMessage" className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Share Your Message"
                                name="message"
                                value={formValues.message}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit" className="text-uppercase">
                                Get Started
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ContactFormCard);
