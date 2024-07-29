import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Acube-logo-blue.svg'
import './header.css'
import { Button } from 'react-bootstrap';

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function HireTeamHeader() {
    const navigate = useNavigate();
    useEffect(() => {
        preloadImage(logo);
    }, []);
    const handlePageLink = (path) => {
        navigate(path)
    }
    return (
        <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary page-header fixed-top">
            <Container fluid>
                <Navbar.Brand onClick={() => handlePageLink("/")}>
                    <img
                        src={logo}
                        alt="logo"
                        width="192"
                        height="45"
                        className="img-fluid"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto mt-3 mt-xl-0">
                        <Nav.Link onClick={() => handlePageLink("/services")}>
                            Plan and pricing
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/portfolio")}>
                            FAQs
                        </Nav.Link>
                        <div className="nav-btn px-2">
                            <Nav.Link className="p-0 pb-2">
                                <Button variant="primary" className="text-uppercase">Book A 30 min Call</Button>
                            </Nav.Link>
                            <div className="blinking-dot">We’re Here for You Online</div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HireTeamHeader;