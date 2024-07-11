import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Acube-logo-blue.svg'
import carretDown from '../../images/chevron-down.svg'
import './header.css'
import { Button } from 'react-bootstrap';

function Header() {
    const navigate = useNavigate();
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
                        loading="lazy"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => handlePageLink("/services")}>
                            Services
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")}>
                            Hire Team
                            <img src={carretDown} alt='carret-down' loading="lazy" />
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => handlePageLink("/hire-team")}>
                            Contact US
                        </Nav.Link>
                        <Nav.Link className="nav-btn">
                            <Button variant="primary" className="text-uppercase">Hire Developers</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;