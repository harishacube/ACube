import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import enquiry from '../../../../images/services/enquiry.svg';
import experts from '../../../../images/services/experts.svg';
import engagementModel from '../../../../images/services/engagement-model.svg';
import signoff from '../../../../images/services/signoff.svg';
import assess from '../../../../images/services/assess.svg';
import growth from '../../../../images/services/growth.svg';


const StepsToHire = () => {
    const icons = [
        { src: enquiry, alt: 'Enquiry', title: 'Enquiry' },
        { src: experts, alt: 'Consult with Experts', title: 'Consult with Experts' },
        { src: engagementModel, alt: 'Choose the Engagement Model', title: 'Choose the Engagement Model' },
        { src: signoff, alt: 'Sign off and Begin 2 Weeks Trial', title: 'Sign off and Begin 2 Weeks Trial' },
        { src: assess, alt: 'Assess the Performance of the Team', title: 'Assess the Performance of the Team' },
        { src: growth, alt: 'Grow your Team', title: 'Grow your Team' },
    ];

    return (
        <section>
            <Container fluid className="p-4 p-lg-5">
                <Row className="text-center">
                    <Col xs="12">
                        <h1 className="ft-wt-600 text-center text-primary mb-5 text-uppercase">6 Simple steps to Hire Our Developers</h1>
                    </Col>
                    {icons.map((icon, index) => (
                        <Col xs={6} sm={4} md={4} lg={2} key={index} className="mb-4">
                            <img src={icon.src} alt={icon.alt} loading="lazy" className="img-fluid mb-4" />
                            <p className="ft-wt-500">{icon.title}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default StepsToHire;
