import React from "react";
import BrandsCarousel from "../../../components/carousels/brands-carousel";
import ContactForm from "../../../components/forms/contact-form";
import PortfolioCarousel from "../../../components/carousels/portfolio-carousel";
import TestimonialVideoPlayer from "../../../components/videos/testimonial-video";
import { PortfolioContentConfig, urlRouting } from "../../../config/portfolio-content-config";
import HeroBanner from "./components/hero";
import InfoSection from "./components/info-section";
import KeyInsights from "./components/key-insights";
import TechnologyList from "./components/technology-list";


const PortfolioBaseLayout = () => {
    const currentPath = window.location.pathname
    const findPath = urlRouting.find((data) => data.pathname === currentPath);
    const page = PortfolioContentConfig.find((data) => data.pageName === findPath.pageName);
    return (
        <>
            <section className="layout-wrapper">
                <HeroBanner
                    title={page.title}
                    content={page.content}
                    backgroundImage={page.backgroundImage}
                />
                <InfoSection
                    image={page.infoSection?.image}
                    alt={page.infoSection?.alt}
                    paragraphs={page.infoSection?.paragraphs}
                />
                <KeyInsights
                    title={page.infoSection?.insights.title}
                    info={page.infoSection?.insights.info}
                />
                <TechnologyList
                    title={page.technologyList?.title}
                    image={page.technologyList?.image}
                    alt={page.technologyList?.alt}
                />
                <TestimonialVideoPlayer />
                <BrandsCarousel />
                <PortfolioCarousel />
                <ContactForm />
            </section>
        </>
    );
};

export default PortfolioBaseLayout;
