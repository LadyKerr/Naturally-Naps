import React from "react";
import HomeWelcome from './homeWelcome';
import HomeCards from './homeCards';
import HomeCarousel from './homeCarousel';

function Home() {
    return (
        <div>
            <HomeWelcome />
            <HomeCards />
            <HomeCarousel />
        </div>
    );
}

export default Home;