import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DarkHeader from "../components/header/dark-header";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";
import HireTeamHeader from "../components/header/hire-team-header";

const DefaultLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const headersMap = {
        "/": Header,
        "/services": DarkHeader,
        "/hire-team": DarkHeader,
        "/portfolio": DarkHeader,
        "/contact-us": DarkHeader
    };

    const servicesPaths = [
        "/artificial-intelligence",
        "/web-app",
        "/blockchain-app",
        "/cloud-strategy",
        "/robotic-process-automation",
        "/devops",
        "/uxui-services",
        "/mobility",
        "/software-testing",
        "/analytics"
    ];

    const getHeaderComponent = (path) => {
        if (path.startsWith("/hire")) return HireTeamHeader;
        if (servicesPaths.includes(path)) return Header;
        if (path.startsWith("/portfolio/")) return Header;
        return headersMap[path] || Header;
    };

    const HeaderComponent = getHeaderComponent(currentPath);

    return (
        <>
            {HeaderComponent && <HeaderComponent />}
            <div className="main-section">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default DefaultLayout;
