import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="mt-120">
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default DefaultLayout