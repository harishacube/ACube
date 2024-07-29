import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo-white.svg';
import carretDown from '../../images/chevron-down-white.svg';
import './header.css';
import { Button } from 'react-bootstrap';

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function DarkHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        preloadImage(logo);
    }, []);

    const handlePageLink = (path) => {
        navigate(path);
    }

    const isActive = (path) => {
        return location.pathname === path ? 'active-link' : '';
    }

    return (
        <Navbar collapseOnSelect expand="xl" className="page-header fixed-top dark-header navbar-dark">
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
                        <Nav.Link onClick={() => handlePageLink("/services")} className={isActive("/services")}>
                            Services
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")} className={isActive("/hire-team")}>
                            Hire Team
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/portfolio")} className={isActive("/portfolio")}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/contact-us")} className={isActive("/contact-us")}>
                            Contact US
                        </Nav.Link>
                        <Nav.Link className="nav-btn px-2 py-0" href="https://calendly.com/acube/discovery-call?month=2024-07" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="text-uppercase">Hire Developers</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DarkHeader;
