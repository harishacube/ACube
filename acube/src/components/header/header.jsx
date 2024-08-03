import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Acube-logo-blue.svg';
import carretDown from '../../images/chevron-down.svg';
import './header.css';
import { Button } from 'react-bootstrap';
import HireTeam from '../../pages/hire-team/hire-team';
import closeMenu from '../../images/close-menu.svg';
import Services from '../../pages/services/services';

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function Header() {
    const navigate = useNavigate();
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

    return (
        <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary page-header fixed-top">
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
                            className={showMegaMenu.services ? 'fw-bold' : ''}
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
                            className={showMegaMenu.hireTeam ? 'fw-bold' : ''}
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
                        <Nav.Link onClick={() => handlePageLink("/portfolio")}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/contact-us")}>
                            Contact US
                        </Nav.Link>
                        <Nav.Link className="nav-btn px-2 py-0" href="https://calendly.com/acube/discovery-call?month=2024-07" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="text-uppercase" >Hire Developers</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {!isMobile && (
                <>
                    {showMegaMenu?.services ? (
                        <div className="mega-menu">
                            <div className="mega-menu-header">
                                <Button variant="link" className="close-btn" onClick={closeMegaMenu}>
                                    <img src={closeMenu} alt="close" />
                                </Button>
                            </div>
                            <Services isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                        </div>
                    ) : showMegaMenu?.hireTeam ? (
                        <div className="mega-menu">
                            <div className="mega-menu-header">
                                <Button variant="link" className="close-btn" onClick={closeMegaMenu}>
                                    <img src={closeMenu} alt="close" />
                                </Button>
                            </div>
                            <HireTeam isMegaMenu={true} closeMegaMenu={closeMegaMenu} />
                        </div>
                    ) : null}
                </>
            )}
        </Navbar>
    );
}

export default Header;
