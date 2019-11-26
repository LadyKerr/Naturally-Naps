import React from "react";
import HomeWelcome from './homeWelcome';
import HomeCards from './homeCards';
import HomeCarousel from './homeCarousel';
import Footer from '../StaticComponents/footer';

function Home() {
    return (
        <div>
            <HomeWelcome />
            <HomeCards />
            <HomeCarousel />
            <Footer />
        </div>
    );
}

export default Home;