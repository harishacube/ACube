import React from "react";
import HeroBanner from "./components/hero";
import InfoSection from "./components/info-section";
import PricingCards from "./components/pricing-cards";
import '../hire-team.css'
import BenefitsList from "./components/benefits-list";
import TechnologyList from "./components/technology-list";
import { HireTeamContentConfig } from "../../../config/hire-team-content-config";
import { urlRouting } from "../../../config/hire-team-content-config";
import FAQSection from "../../../components/accordion/faq";
import ProductPartners from "../../home/sections/product-partners";
import ContactForm from "../../../components/forms/contact-form";
import TestimonialVideoPlayer from "../../../components/videos/testimonial-video";
import TestimonialCarousel from "../../../components/carousels/testimonial-carousel";
const HireTeamBaseLayout = () => {
    const currentPath = window.location.pathname
    const findPath = urlRouting.find((data) => data.pathname === currentPath);
    const page = HireTeamContentConfig.find((data) => data.pageName === findPath.pageName);
    return (
        <>
            <section className="hire-team layout-wrapper">
                <HeroBanner
                    title={page.title}
                    content={page.content}
                    backgroundImage={page.backgroundImage}
                    bannerImage={page.bannerImage}
                    alt={page.alt}
                />
                <InfoSection />
                <PricingCards />
                <BenefitsList
                    benefits={page.benefits || []}
                />
                <TechnologyList
                    title={page.technologyList?.title}
                    image={page.technologyList?.image}
                    alt={page.technologyList?.alt}
                />
                <ContactForm />
                <TestimonialVideoPlayer />
                <TestimonialCarousel />
                <FAQSection />
                <ProductPartners />
            </section>
        </>
    );
};

export default HireTeamBaseLayout;
