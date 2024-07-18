import React, { useEffect } from "react";
import Hero from "./sections/hero";
import './home.css'
import ExploreOfferings from "./sections/explore-offerings";
import TechnicalCompetency from "./sections/technical-competency";
import TestimonialCarousel from "../../components/carousels/testimonial-carousel";
import ProductPartners from "./sections/product-partners";
import ScheduleCall from "./sections/schedule-a-call";
import CompanyInsights from "./sections/company-insights";
import BrandsCarousel from "../../components/carousels/brands-carousel";
import ContactForm from "../../components/forms/contact-form";
import PortfolioCarousel from "../../components/carousels/portfolio-carousel";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero />
            <BrandsCarousel />
            <CompanyInsights />
            <ExploreOfferings />
            <ScheduleCall />
            <TechnicalCompetency />
            <PortfolioCarousel />
            <ProductPartners />
            <TestimonialCarousel />
            <ContactForm />

        </>
    )
};

export default HomePage