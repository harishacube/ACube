import React from "react";
import { Container } from "react-bootstrap";

const BenefitsList = ({ title, benefits = [] }) => {
    return (
        <>
            <section className="benefits-section">
                <Container fluid className="p-4 p-lg-5">
                    <h1 className="text-primary mb-0 text-uppercase ft-wt-600 mb-4">{title}</h1>
                    <ul className="list-block">
                        {benefits.map((benefit, index) => (
                            <li className="text-primary" key={index}><p className="mb-0">{benefit}</p></li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default BenefitsList;
