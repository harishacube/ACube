import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import rxnt from '../../images/rxnt.svg';
import frank from '../../images/frank.svg';
import svhs from '../../images/svhs.svg';
import tds from '../../images/tds-logo.svg';
import tynax from '../../images/tynax.svg';
import anatomie from '../../images/anatomie.svg';
import vacsewcenter from '../../images/vacsew-center.svg';
import westBoca from '../../images/west-boca.svg';
import openn from '../../images/openn.svg';
import willship from '../../images/willship.svg';

import rxntPortfolio from '../../images/portfolio/rxnt.webp';
import frankPortfolio from '../../images/portfolio/frank.webp';
import svhsPortfolio from '../../images/portfolio/svhs.webp';
import tdsPortfolio from '../../images/portfolio/tds.webp';
import tynaxPortfolio from '../../images/portfolio/tynax.webp';
import anatomiePortfolio from '../../images/portfolio/anatomie.webp';
import vacsewcenterPortfolio from '../../images/portfolio/vacsewcenter.webp';
import westBocaPortfolio from '../../images/portfolio/wbes.webp';
import opennPortfolio from '../../images/portfolio/openn.webp';
import willshipPortfolio from '../../images/portfolio/willship.webp';

import './portfolio.css';

// URL Routing
const urlRouting = [
    { pathname: "/portfolio/rxnt", pageName: "rxnt" },
    { pathname: "/portfolio/frank", pageName: "frank" },
    { pathname: "/portfolio/svhs", pageName: "svhs" },
    { pathname: "/portfolio/tds", pageName: "tds" },
    { pathname: "/portfolio/tynax", pageName: "tynax" },
    { pathname: "/portfolio/anatomie", pageName: "anatomie" },
    { pathname: "/portfolio/vacsewcenter", pageName: "vacsewcenter" },
    { pathname: "/portfolio/wbes", pageName: "wbes" },
    { pathname: "/portfolio/openn", pageName: "openn" },
    { pathname: "/portfolio/willship", pageName: "willship" },
];

const Portfolio = () => {
    const logos = [
        { src: rxnt, alt: "healthcare technology", link: urlRouting.find(item => item.pageName === "rxnt").pathname },
        { src: frank, alt: "food safety", link: urlRouting.find(item => item.pageName === "frank").pathname },
        { src: svhs, alt: "online high school courses", link: urlRouting.find(item => item.pageName === "svhs").pathname },
        { src: tds, alt: "web-based tax API serving", link: urlRouting.find(item => item.pageName === "tds").pathname },
        { src: tynax, alt: "high-tech patent trading", link: urlRouting.find(item => item.pageName === "tynax").pathname },
        { src: anatomie, alt: "online shopping", link: urlRouting.find(item => item.pageName === "anatomie").pathname },
        { src: vacsewcenter, alt: "vacuum & sewing center", link: urlRouting.find(item => item.pageName === "vacsewcenter").pathname },
        { src: westBoca, alt: "premium office space", link: urlRouting.find(item => item.pageName === "wbes").pathname },
        { src: openn, alt: "property sales", link: urlRouting.find(item => item.pageName === "openn").pathname },
        { src: willship, alt: "international shipping platform", link: urlRouting.find(item => item.pageName === "willship").pathname }
    ];

    const portfolioItems = [
        { logo: rxnt, title: "RXNT,USA", subtext: "A leader in healthcare technology solutions, RXNT is recognized on the annual Inc. Magazine list of 5000 Fastest-Growing Private Companies 2019, the most prestigious ranking of the nation’s fastest-growing private companies.", img: rxntPortfolio, link: urlRouting.find(item => item.pageName === "rxnt").pathname },
        { logo: frank, title: "FRANK, Australia", subtext: "A company that helps businesses ensure that food safety compliance is done in a simple and straightforward way. Now touching over 500,000 meals per year in Australia.", img: frankPortfolio, link: urlRouting.find(item => item.pageName === "frank").pathname },
        { logo: svhs, title: "Silicon Valley High School, USA", subtext: "Silicon Valley High School offers students enrolled in traditional high schools or homeschooling programs the opportunity to access innovative, relevant, and compelling online high school courses.", img: svhsPortfolio, link: urlRouting.find(item => item.pageName === "svhs").pathname },
        { logo: tds, title: "TaxDataSystems, USA", subtext: "A web-based tax API serving major eCommerce websites since 2009. Joined Thomson Reuters in 2014, and maintain the broadest and deepest coverage of indirect tax content in 14,500 tax jurisdictions for more than 175 countries", img: tdsPortfolio, link: urlRouting.find(item => item.pageName === "tds").pathname },
        { logo: tynax, title: "TYNAX", subtext: "At the forefront of global high-tech patent trading, Tynax operates a cutting-edge exchange boasting hundreds of thousands of patents.", img: tynaxPortfolio, link: urlRouting.find(item => item.pageName === "tynax").pathname },
        { logo: anatomie, title: "ANATOMIE STYLE", subtext: "Founded by the visionary duo Kate and Shawn Boyer, Anatomie stands as a beacon of innovation in the realm of designer fashion.", img: anatomiePortfolio, link: urlRouting.find(item => item.pageName === "anatomie").pathname },
        { logo: vacsewcenter, title: "VACSEWCENTER", subtext: "Vacsewcenter takes great pride in its vast inventory, offering a diverse selection of machines, parts, and supplies, including elusive and hard-to-find items.", img: vacsewcenterPortfolio, link: urlRouting.find(item => item.pageName === "vacsewcenter").pathname },
        { logo: westBoca, title: "WBES", subtext: "As West Boca Raton’s local provider of premium office space, WBES is optimally suited toward fulfilling the needs of our clients. With the resources of one of Boca’s largest property owners we are able to hire the most professional staff, offer the most luxurious furnishings and operate in a facility of the highest caliber.", img: westBocaPortfolio, link: urlRouting.find(item => item.pageName === "wbes").pathname },
        { logo: openn, title: "Openn, Australia", subtext: "Openn Negotiation is a transparent sales method which helps Buyers and Sellers find the true market price for a property, through an online bidding platform.", img: opennPortfolio, link: urlRouting.find(item => item.pageName === "openn").pathname },
        { logo: willship, title: "Willship International, Australia.", subtext: "Willship is the amalgamation of two specialized freight forwarders - one focussed on international automotive freight, the other in general freight. The result is a team with over 100 years industry experience and an expertise in all elements of international shipping.", img: willshipPortfolio, link: urlRouting.find(item => item.pageName === "willship").pathname }
    ];

    return (
        <>
            <section className="portfolio-section">
                <Container className="content-block" fluid>
                    <div className="mb-4">
                        <h1 className="text-primary ft-wt-600 mb-4">Portfolio</h1>
                    </div>
                    <div className="mx-auto">
                        <Row className="d-flex justify-content-between mb-4 flex-wrap">
                            {logos.map((logo, index) => (
                                <Col key={index} xs="6" md="4" lg="2" className="text-center custom-col mb-4">
                                    <a href={logo.link}>
                                        <img src={logo.src} alt={logo.alt} className="brand-logo" loading="lazy" />
                                        <div className="mt-2">
                                            <p className="brand-link text-capitalize">{logo.alt}</p>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <hr className="my-4" />
                    <Container className="portfolio-items overflow-auto" fluid>
                        {portfolioItems.map((item, index) => (
                            <Row key={index} className={`portfolio-item ${index === 0 ? 'first-item' : ''}`}>
                                <Col xs="12" lg="6" className="d-flex align-items-start mb-4 mb-lg-0">
                                    <div>
                                        <img src={item.logo} alt={item.title} className="portfolio-logo me-3" />
                                        <h5 className="mb-1 big-title text-primary">{item.title}</h5>
                                        <h6 className="mb-4 text-primary">{item.subtext}</h6>
                                        <Button variant="primary" className="text-uppercase" href={item.link}>Know More</Button>
                                    </div>
                                </Col>
                                <Col xs="12" lg="6">
                                    <img src={item.img} alt={item.title} className="portfolio-img" />
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Container>
            </section>
        </>
    );
};

export default Portfolio;
