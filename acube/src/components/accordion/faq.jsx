import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQSection = () => {

    return (
        <section className="faq-section">
            <Container fluid className="p-4 p-lg-5 flex-column d-flex">
                <Row className="justify-content-center">
                    <Col xs="12">
                        <h1 className="texrt-primary ft-wt-600 text-center text-uppercase mb-4">FAQ</h1>
                        <Accordion className="d-flex flex-column gap-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What services do you offer in AI development?</Accordion.Header>
                                <Accordion.Body>
                                    We offer a comprehensive range of AI development services, including machine learning model development, natural language processing (NLP), computer vision, predictive analytics, and AI-driven automation solutions. Our services are designed to help businesses enhance their operations, improve decision-making, and create innovative products and services.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do you ensure the quality of your AI solutions?</Accordion.Header>
                                <Accordion.Body>
                                    We ensure the quality of our AI solutions through rigorous testing, validation, and continuous improvement processes. Our team follows industry best practices, including thorough data preprocessing, model training, and evaluation. We also conduct regular performance assessments and updates to ensure our solutions remain effective and accurate over time.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can you customize AI solutions to fit my business needs?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we specialize in creating custom AI solutions tailored to your specific business needs. We work closely with you to understand your requirements, challenges, and goals, and then develop AI solutions that integrate seamlessly with your existing systems and processes. Our aim is to deliver solutions that provide maximum value and impact for your business.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What industries do you serve?</Accordion.Header>
                                <Accordion.Body>
                                    We serve a wide range of industries, including healthcare, finance, retail, manufacturing, telecommunications, and more. Our expertise in AI allows us to create tailored solutions for different sectors, addressing unique challenges and helping businesses achieve their specific objectives.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How do you handle data privacy and security?</Accordion.Header>
                                <Accordion.Body>
                                    Data privacy and security are our top priorities. We follow strict protocols to ensure the confidentiality and integrity of your data. Our practices include data encryption, access control, secure data storage, and compliance with relevant data protection regulations such as GDPR and HIPAA. We also perform regular security audits to identify and mitigate potential risks.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="text-center mt-5">
                            <Button className="text-uppercase" variant="primary">
                                Have More Questions? Let’s Connect!
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FAQSection;
