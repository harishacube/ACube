import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo-white.svg';
import carretDown from '../../images/chevron-down-white.svg';
import './header.css';
import { Button } from 'react-bootstrap';
import HireTeam from '../../pages/hire-team/hire-team';
import Services from '../../pages/services/services';
import closeMenu from '../../images/close-menu.svg';

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function DarkHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showMegaMenu, setShowMegaMenu] = useState({ services: false, hireTeam: false });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        preloadImage(logo);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePageLink = (path) => {
        navigate(path);
        setShowMegaMenu({ services: false, hireTeam: false });
    };

    const closeMegaMenu = () => {
        setShowMegaMenu({ services: false, hireTeam: false });
    };

    const toggleMegaMenu = (menu) => {
        setShowMegaMenu(prevState => ({
            services: menu === 'services' ? !prevState.services : false,
            hireTeam: menu === 'hireTeam' ? !prevState.hireTeam : false
        }));
    };

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
                        width="130"
                        height="45"
                        className="img-fluid d-block d-lg-none"
                    />
                    <img
                        src={logo}
                        alt="logo"
                        width="192"
                        height="45"
                        className="img-fluid d-none d-lg-block"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-0 ms-lg-auto mt-3 mt-xl-0">
                        <Nav.Link
                            onClick={() => toggleMegaMenu('services')}
                            className={isActive("/services") + (showMegaMenu.services ? ' fw-bold' : '')}
                        >
                            Services
                            <img
                                src={carretDown}
                                alt='carret-down'
                                loading="lazy"
                                className={showMegaMenu.services ? 'rotate-up' : ''}
                            />
                        </Nav.Link>
                        {isMobile && showMegaMenu.services && (
                            <div className="mobile-mega-menu pt-1 services-menu">
                                <Services isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                            </div>
                        )}
                        <Nav.Link
                            onClick={() => toggleMegaMenu('hireTeam')}
                            className={isActive("/hire-team") + (showMegaMenu.hireTeam ? ' fw-bold' : '')}
                        >
                            Hire Team
                            <img
                                src={carretDown}
                                alt='carret-down'
                                loading="lazy"
                                className={showMegaMenu.hireTeam ? 'rotate-up' : ''}
                            />
                        </Nav.Link>
                        {isMobile && showMegaMenu.hireTeam && (
                            <div className="mobile-mega-menu pt-1">
                                <HireTeam isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                            </div>
                        )}
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
            {!isMobile && showMegaMenu.services && (
                <div className="mega-menu">
                    <div className="mega-menu-header">
                        <Button variant="link" className="close-btn" onClick={closeMegaMenu}>
                            <img src={closeMenu} alt="close" />
                        </Button>
                    </div>
                    <Services isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                </div>
            )}
            {!isMobile && showMegaMenu.hireTeam && (
                <div className="mega-menu">
                    <div className="mega-menu-header">
                        <Button variant="link" className="close-btn" onClick={closeMegaMenu}>
                            <img src={closeMenu} alt="close" />
                        </Button>
                    </div>
                    <HireTeam isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                </div>
            )}
        </Navbar>
    );
}

export default DarkHeader;
