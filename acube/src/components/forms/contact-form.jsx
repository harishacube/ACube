import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './forms.css';
import { useScroll } from "../../context/scroll-context";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [recapVal, setRecapVal] = useState(null);
    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const RECAPTCHA_SITE_KEY = '6Lcgoh4qAAAAAA2qFU3hr8AwlRMsuQIVh2sy7pQg';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        validateField(name, value);
    };

    const handlePhoneChange = (value) => {
        setFormValues({ ...formValues, phone: value });
        validateField('phone', value);
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setSelectedOption(value);
        validateField('selectedOption', value);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'name':
                newErrors.name = value ? '' : 'Name is required';
                break;
            case 'company':
                newErrors.company = value ? '' : 'Company is required';
                break;
            case 'email':
                newErrors.email = value ? '' : 'Email is required';
                break;
            case 'phone':
                newErrors.phone = value ? '' : 'Phone number is required';
                break;
            case 'selectedOption':
                newErrors.selectedOption = value ? '' : 'Please select an option';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.company) newErrors.company = 'Company is required';
        if (!formValues.email) newErrors.email = 'Email is required';
        if (!formValues.phone) newErrors.phone = 'Phone number is required';
        if (!selectedOption) newErrors.selectedOption = 'Please select an option';
        if (!recapVal) newErrors.recaptcha = 'Please complete the reCAPTCHA';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = () => {
        const params = {
            name: formValues.name,
            company_name: formValues.company,
            email: formValues.email,
            phone: formValues.phone,
            lookingfor: selectedOption,
            message: formValues.message
        };

        axios.post('http://40.114.109.6:3000/api/sendmail', params)
            .then(response => {
                console.log('Email sent successfully:', response.data);
                setSuccessMessage('Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.');
                setErrorMessage('');
            })
            .catch(error => {
                console.error('There was an error sending the email:', error);
                setSuccessMessage('');
                setErrorMessage('Oops! Something went wrong while sending your message. Please try again later.');
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail();
        } else {
            setSuccessMessage('');
            setErrorMessage('Please make sure all required fields are filled out correctly before submitting the form.');
        }
        console.log("Form submitted:", formValues);
    };

    const { formRef } = useScroll();

    return (
        <section className="contact-form-section py-5" ref={formRef}>
            <Container fluid>
                <h1 className="text-center mb-4 text-primary ft-wt-600 text-uppercase">How we may assist you?</h1>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                <Form onSubmit={handleSubmit} id="footer-contact-form">
                    <Row className="mb-30 gap-3 gap-lg-0">
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formName">
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formCompany">
                                <Form.Control
                                    type="text"
                                    placeholder="Company / Organization"
                                    name="company"
                                    value={formValues.company}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.company}
                                />
                                <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Company Email ID"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3 gap-3 gap-lg-0">
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formSelect">
                                <Form.Control
                                    aria-label="How can we help you?"
                                    as="select"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    isInvalid={!!errors.selectedOption}
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
                                <Form.Control.Feedback type="invalid">{errors.selectedOption}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formPhone">
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
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Group controlId="formMessage">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Share Your Message"
                                    name="message"
                                    value={formValues.message}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="text-center d-flex flex-column gap-4 align-items-center">
                        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(val) => setRecapVal(val)} />
                        {errors.recaptcha && <div className="text-danger mt-2">{errors.recaptcha}</div>}
                        <Button variant="primary" type="submit" className="text-uppercase" disabled={!recapVal}>
                            Get Started
                        </Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default ContactForm;
