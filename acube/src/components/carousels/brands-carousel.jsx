import React from "react";
import Slider from "react-slick";
import rxnt from '../../images/rxnt.svg';
import frank from '../../images/frank.svg';
import thomson from '../../images/thomson.svg';
import anatomie from '../../images/anatomie.svg';
import svhs from '../../images/svhs.svg';
import asn from '../../images/asn.svg'
import openn from '../../images/openn.svg'
import hopscotch from '../../images/hopscotch.svg'
import hatem from '../../images/hatem.svg'
import interplai from '../../images/interplai.svg'
import mobi from '../../images/interplai.svg'
import myOutcomes from '../../images/my-outcomes.svg'
import vacSewCenter from '../../images/vacsew-center.svg'
import tds from '../../images/tds-logo.svg'
import westBoca from '../../images/west-boca.svg'
import tynax from '../../images/tynax.svg'
import { Container, Row, Col } from "react-bootstrap";

const BrandsCarousel = () => {
    const brandsCarouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="brands-carousel-wrapper py-3">
            <Container fluid>
                <Row>
                    <Col xs="12" lg="3" className="d-flex align-items-center justify-content-center">
                        <div className="text-primary ft-wt-600 text-uppercase">Trusted By</div>
                    </Col>
                    <Col xs="12" lg="9">
                        <Slider {...brandsCarouselSettings} className="brands-carousel">
                            <div>
                                <img src={rxnt} alt="rxnt" loading="lazy" />
                            </div>
                            <div>
                                <img src={frank} alt="frank" loading="lazy" />
                            </div>
                            <div>
                                <img src={thomson} alt="thomson" loading="lazy" />
                            </div>
                            <div>
                                <img src={anatomie} alt="anatomie" loading="lazy" />
                            </div>
                            <div>
                                <img src={svhs} alt="svhs" loading="lazy" />
                            </div>
                            <div>
                                <img src={asn} alt="asn" loading="lazy" />
                            </div>

                            <div>
                                <img src={openn} alt="openn" loading="lazy" />
                            </div>
                            <div>
                                <img src={hopscotch} alt="hopscotch" loading="lazy" />
                            </div>
                            <div>
                                <img src={hatem} alt="hatem" loading="lazy" />
                            </div>
                            <div>
                                <img src={interplai} alt="interplai" loading="lazy" />
                            </div>
                            <div>
                                <img src={tds} alt="svhs" loading="lazy" />
                            </div>
                            <div>
                                <img src={myOutcomes} alt="myOutcomes" loading="lazy" />
                            </div>
                            <div>
                                <img src={mobi} alt="mobi" loading="lazy" />
                            </div>
                            <div>
                                <img src={westBoca} alt="westBoca" loading="lazy" />
                            </div>
                            <div>
                                <img src={vacSewCenter} alt="vacSewCenter" loading="lazy" />
                            </div>
                            <div>
                                <img src={tynax} alt="tynax" loading="lazy" />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BrandsCarousel;
