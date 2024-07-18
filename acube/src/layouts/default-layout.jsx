import React from "react";
import Header from "../components/header/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
import DarkHeader from "../components/header/dark-header";
import ScrollToTop from "../components/scroll-to-top";

const DefaultLayout = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    return (
        <>
            {isHomePage ? <Header /> : <DarkHeader />}
            <div className="mt-120">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
};

export default DefaultLayout