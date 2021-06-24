import React from 'react';
import { siteData } from './Data';


const About = () => {
    return (
        <>
            <p>{siteData.pages[1] && siteData.pages[1].content && siteData.pages[1].content.heading}</p>
            <p>{siteData.pages[1] && siteData.pages[1].content && siteData.pages[1].content.description}</p>
        </>
    )

}

export default About;