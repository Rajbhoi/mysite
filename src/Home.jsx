import React from 'react';
import Cards from './Cards';
import Slider from './Carousel';
import { siteData } from './Data';



const Home = () => {

    return (
        <>
            {
                siteData.pages[0].content &&
                <Slider heroSection={siteData.pages[0].content.heroSection} />
            }
            {
                siteData.pages[0].content.gridSection &&
                <Cards gridSection={siteData.pages[0].content.gridSection.data} />
            }


        </>
    );

};

export default Home;


