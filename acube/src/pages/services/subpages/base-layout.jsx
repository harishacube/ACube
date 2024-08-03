import React, { useEffect } from "react";
import HeroBanner from "./components/hero-banner";
import BenefitsList from "./components/benefits-list";
import BrandsCarousel from "../../../components/carousels/brands-carousel";
import ContactForm from "../../../components/forms/contact-form";
import PortfolioCarousel from "../../../components/carousels/portfolio-carousel";
import TestimonialVideoPlayer from "../../../components/videos/testimonial-video";
import Advertisement from "./components/advertisement";
import StepsToHire from "./components/steps-to-hire";
import FieldBadges from "./components/category-badges";
import { serviceContentConfig, urlRouting } from "../../../config/service-content-config";
import ServicesSection from "./components/services-section";



const BaseLayout = () => {
    const currentPath = window.location.pathname
    const findPath = urlRouting.find((data) => data.pathname === currentPath);
    const page = serviceContentConfig.find((data) => data.pageName === findPath.pageName);

    useEffect(() => {
    }, [currentPath])
    return (
        <>
            <section className="layout-wrapper">
                <HeroBanner
                    title={page.title}
                    content={page.content}
                    backgroundImage={page.backgroundImage}
                />
                <BrandsCarousel />
                <Advertisement />
                <BenefitsList benefits={page.benefitsList.benefits || []} title={page.benefitsList.title} />
                <ServicesSection
                    alt={page.service.alt}
                    image={page.service.image}
                />
                <StepsToHire />
                <FieldBadges />
                <TestimonialVideoPlayer />
                <PortfolioCarousel />
                <ContactForm />
            </section>
        </>
    );
};

export default BaseLayout;
