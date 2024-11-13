import React from 'react';
import Navigation from "../components/Navigation";
import Main from "../pages/Home/Main";
import Section1 from "../pages/Home/Section1";
import Banner from "../pages/Home/Banner";
import Section2 from "../pages/Home/Section2";
import Section3 from "../pages/Home/Section3";
import Footer from "../pages/Home/Footer";

function Home() {
    return (
        <>
            <Navigation/>
            <Main/>
            <Section1/>
            <Banner/>
            <Section2/>
            <Section3/>
            <Footer/>
        </>
    );
}

export default Home;
