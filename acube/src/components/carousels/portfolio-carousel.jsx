import React from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import image1 from '../../images/rxnt-mockup.webp';
import image2 from '../../images/frank-mockup.webp';
import image3 from '../../images/svhs-mockup.webp';
import image4 from '../../images/tds-mockup.webp';
import image5 from '../../images/tynax-mockup.webp';
import image6 from '../../images/anatomie-mockup.webp';
import image7 from '../../images/vacsewcenter-mockup.webp';
import image8 from '../../images/wbes-mockup.webp';
import image9 from '../../images/openn-mockup.webp';
import image10 from '../../images/willship-mockup.webp';
import prevIcon from '../../images/prev.svg';
import nextIcon from '../../images/next.svg';

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            src={prevIcon}
            alt="Previous"
            className={`custom-arrow custom-prev ${className}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            src={nextIcon}
            alt="Next"
            className={`custom-arrow custom-next ${className}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

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

const PortfolioCarousel = () => {
    const portfolioCarousel = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const carouselItems = [
        {
            id: 1,
            image: image1,
            title: "RXNT",
            link: "https://www.rxnt.com",
            linkTitle: "www.rxnt.com",
            description: "A leader in healthcare technology solutions, RXNT is recognized on the annual Inc. Magazine list of 5000 Fastest-Growing Private Companies 2019, the most prestigious ranking of the nation’s fastest-growing private companies.",
            pathname: urlRouting.find(item => item.pageName === "rxnt").pathname
        },
        {
            id: 2,
            image: image2,
            title: "FRANK",
            link: "https://frankfoodsafety.com",
            linkTitle: "www.frankfoodsafety.com",
            description: "A company that helps businesses ensure that food safety compliance is done in a simple and straightforward way. Now touching over 500,000 meals per year in Australia.",
            pathname: urlRouting.find(item => item.pageName === "frank").pathname
        },
        {
            id: 3,
            image: image3,
            title: "Silicon Valley High School",
            link: "https://svhs.co",
            linkTitle: "www.svhs.co",
            description: "Silicon Valley High School offers students enrolled in traditional high schools or homeschooling programs the opportunity to access innovative, relevant, and compelling online high school courses.",
            pathname: urlRouting.find(item => item.pageName === "svhs").pathname
        },
        {
            id: 4,
            image: image4,
            title: "Tax Data Systems",
            link: "https://vikingcoders.com",
            linkTitle: "www.vikingcoders.com",
            description: "A web-based tax API serving major eCommerce websites since 2009. Joined Thomson Reuters in 2014, and maintain the broadest and deepest coverage of indirect tax content in 14,500 tax jurisdictions for more than 175 countries.",
            pathname: urlRouting.find(item => item.pageName === "tds").pathname
        },
        {
            id: 5,
            image: image5,
            title: "TYNAX",
            link: "https://tynax.com/",
            linkTitle: "www.tynax.com",
            description: "At the forefront of global high-tech patent trading, Tynax operates a cutting-edge exchange boasting hundreds of thousands of patents.",
            pathname: urlRouting.find(item => item.pageName === "tynax").pathname
        },
        {
            id: 6,
            image: image6,
            title: "ANATOMIE STYLE",
            link: "https://anatomie.com",
            linkTitle: "www.anatomie.com",
            description: "Founded by the visionary duo Kate and Shawn Boyer, Anatomie stands as a beacon of innovation in the realm of designer fashion.",
            pathname: urlRouting.find(item => item.pageName === "anatomie").pathname
        },
        {
            id: 7,
            image: image7,
            title: "VACSEWCENTER",
            link: "https://vacsewcenter.com",
            linkTitle: "www.vacsewcenter.com",
            description: "Vacsewcenter takes great pride in its vast inventory, offering a diverse selection of machines, parts, and supplies, including elusive and hard-to-find items.",
            pathname: urlRouting.find(item => item.pageName === "vacsewcenter").pathname
        },
        {
            id: 8,
            image: image8,
            title: "WBES",
            link: "https://www.westbocaexecutivesuites.com/",
            linkTitle: "www.westbocaexecutivesuites.com",
            description: "As West Boca Raton’s local provider of premium office space, WBES is optimally suited toward fulfilling the needs of our clients. With the resources of one of Boca’s largest property owners we are able to hire the most professional staff, offer the most luxurious furnishings and operate in a facility of the highest caliber.",
            pathname: urlRouting.find(item => item.pageName === "wbes").pathname
        },
        {
            id: 9,
            image: image9,
            title: "Openn",
            link: "https://www.openn.com/en-au",
            linkTitle: "www.openn.com",
            description: "Openn Negotiation is a transparent sales method which helps Buyers and Sellers find the true market price for a property, through an online bidding platform.",
            pathname: urlRouting.find(item => item.pageName === "openn").pathname
        },
        {
            id: 10,
            image: image10,
            title: "Willship International",
            link: "https://willship.com.au",
            linkTitle: "www.willship.com.au",
            description: "Willship is the amalgamation of two specialized freight forwarders - one focused on international automotive freight, the other in general freight. The result is a team with over 100 years industry experience and an expertise in all elements of international shipping.",
            pathname: urlRouting.find(item => item.pageName === "willship").pathname
        },
    ];

    return (
        <section className="portfolio-carousel-section">
            <Container fluid className="px-0">
                <Slider {...portfolioCarousel} className="portfolio-carousel">
                    {carouselItems.map(item => (
                        <div key={item.id} className="portfolio-item pt-0">
                            <Row className="align-items-center h-100">
                                <Col xs="12" lg="6" className="text-white text-start">
                                    <div className="details-block px-2 px-lg-0">
                                        <h1 className="ft-wt-600 text-uppercase top-text">Portfolio</h1>
                                        <h1 className="my-2 my-lg-4 portfolio-title">{item.title}</h1>

                                        <a href={item.link} className="text-decoration-none text-white ft-wt-500 brand-urls d-none d-lg-inline-block" target="_blank" rel="noreferrer">
                                            <p>{item.linkTitle}</p>
                                        </a>
                                        <h5 className="my-2 my-lg-4 fw-normal d-none d-lg-block">{item.description}</h5>
                                        <Button variant="secondary" className="mt-2 mt-lg-5 mx-0 mx-lg-2 d-none d-lg-inline-block" href={item.pathname}>Know More</Button>
                                    </div>
                                </Col>
                                <Col xs="12" lg="6" className="pt-4 pt-lg-0">
                                    <img src={item.image} alt={item.title} loading="lazy" className="img-fluid w-100 p-4 p-lg-0" />
                                    <div className="text-white mx-4 d-block d-lg-none">
                                        <a href={item.link} className="text-decoration-none text-white ft-wt-500 brand-urls" target="_blank" rel="noreferrer">
                                            <p>{item.linkTitle}</p>
                                        </a>
                                        <p className="my-4 fw-normal line-height-24">{item.description}</p>
                                        <Button variant="secondary" className="mt-2 mt-lg-5 mx-0 mx-lg-2" href={item.pathname}>Know More</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default PortfolioCarousel;
