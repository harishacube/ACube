import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo-white.svg'
import carretDown from '../../images/chevron-down-white.svg'
import './header.css'
import { Button } from 'react-bootstrap';

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function DarkHeader() {
    const navigate = useNavigate();
    useEffect(() => {
        preloadImage(logo);
    }, []);
    const handlePageLink = (path) => {
        navigate(path)
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
                        <Nav.Link onClick={() => handlePageLink("/services")}>
                            Services
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")}>
                            Hire Team
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/portfolio")}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/contact-us")}>
                            Contact US
                        </Nav.Link>
                        <Nav.Link className="nav-btn">
                            <Button variant="secondary" className="text-uppercase">Hire Developers</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DarkHeader;