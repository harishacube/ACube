import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import davidSmith from '../../images/david.webp';
import paulWagner from '../../images/paul.webp';
import markLFox from '../../images/mark.webp';
import { Container } from 'react-bootstrap';
import randyBoldyga from '../../images/randy-boldyga.svg';
import guySimani from '../../images/guy-simani.svg';
import chuckEast from '../../images/chuck-east.svg';

const testimonials = [
    {
        imgSrc: davidSmith,
        name: "David Smith, CEO Tynax, Inc",
        text: "I have been very impressed by ACube's work and would highly recommend them. They quickly perform the work, solve all technical issues in the process, deliver finished results and then check back to ensure that all is working OK. They are a pleasure to work with and I plan to use ACube for several projects in the future."
    },
    {
        imgSrc: paulWagner,
        name: "Paul Wagner, CEO CreativeLab",
        text: "ACube Technologies is a sharp, dedicated group of guys who will do whatever it takes to complete a job and fulfill a commitment. They ask the right questions, communicate throughout the process and they deliver high-quality work on time and on budget. I recommend ACube for your next project. Hire them, they're great to work with."
    },
    {
        imgSrc: markLFox,
        name: "Mark L Fox, Vice President SAAF",
        text: "I have been working with Acube Technologies for 2 years now. My plan was for them to help me with a few tasks, but today they simply are my entire IT staff. They are technically capable and are extremely fair as far as costs. I work with them 7 days a week and my business would not exist without them....they have helped me grow my business 300%."
    },
    {
        imgSrc: randyBoldyga,
        name: "Randy Boldyga, CEO/President RxNT",
        text: "Acube provided excellent service and demonstrated strong technical capability. I would recommend."
    },
    {
        imgSrc: guySimani,
        name: "Guy Simani, President, Emerald Capital Management",
        text: "The ACube team are reliable, responsive and diligent."
    },
    {
        imgSrc: chuckEast,
        name: "Chuck East, Technical Product Manager, Openn North America",
        text: "I wanted to email you my sentiments expressed at the end of our side so you can share my appreciation with your teams. Thank you for everyone’s willingness to pull together around the shifting priorities coming into engineering. The hard work, extra hours, and deep product knowledge are examples of how the teams go the extra mile. I have been managing offshore teams for many years, and the Openn engineering team is by far the brightest and most dedicated. Thank you for your continued efforts."
    }
];

const TestimonialCarousel = () => {
    const testimonialCarousel = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="testimonial-section px-0">
            <Container fluid>
                <h1 className="title-text text-uppercase text-center text-white mb-5">What people say about us</h1>
                <Slider {...testimonialCarousel} className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div className="pt-50" key={index}>
                            <div className="testimonial-img-div">
                                <img className="mb-3 testimonial-img" loading="lazy" src={testimonial.imgSrc} alt={testimonial.name} height="100" />
                            </div>
                            <div className="bg-light p-4 pb-5 mx-3 rounded-4 card-height h-100">
                                <div className="mt-50">
                                    <h4 className="mb-3 fw-bold text-primary">{testimonial.name}</h4>
                                    <h6 className="mb-4 text-primary">{testimonial.text}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default TestimonialCarousel;
