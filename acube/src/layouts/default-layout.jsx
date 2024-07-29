import React from "react";
import Header from "../components/header/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
import DarkHeader from "../components/header/dark-header";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";
import HireTeamHeader from "../components/header/hire-team-header";

const DefaultLayout = () => {

    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <>
            {currentPath === '/' ? <Header /> : currentPath.startsWith("/hire-team/") ? <HireTeamHeader /> : <DarkHeader />}
            <div className="mt-116">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
};

export default DefaultLayout