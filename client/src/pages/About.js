import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import PictureSection from "../components/about/PictureSection";

const importAll = (r) => {
    return r.keys().sort((a, b) => {
        // Sort the images by name
        const regex = /(?<=\/)(.*?)(?=\.)/g;
        const numA = Number(a.match(regex)[0]);
        const numB = Number(b.match(regex)[0]);

        return numA - numB;
    }).map(r);
}

const thumbnails = importAll(require.context('../assets/about/thumbnails', false, /\.(png|jpe?g|svg)$/));
const fullImages = importAll(require.context('../assets/about/full', false, /\.(png|jpe?g|svg)$/));

const About = () => {
    return (
        <div className="page-content-wrapper">
            <AboutHeader/>
            <PictureSection thumbnails={thumbnails} fullImages={fullImages}/>
        </div>
        
    );
}

export default About;