import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/footer/footer";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Container fluid className="mt-120">
                <Outlet />
            </Container>
            <Footer />
        </>
    )
};

export default DefaultLayout