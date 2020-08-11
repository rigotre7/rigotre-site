import React from "react";
import PictureViewer from "./PictureViewer";

const importAll = (r) => {
    return r.keys().sort((a, b) => {
        // Sort the images by name
        const regex = /(?<=\/)(.*?)(?=\.)/g;
        const numA = Number(a.match(regex)[0]);
        const numB = Number(b.match(regex)[0]);

        return numA - numB;
    }).map(r);
}

const PictureSection = () => {
    const thumbnails = importAll(require.context('./../assets/about/thumbnails', false, /\.(png|jpe?g|svg)$/));
    const fullImages = importAll(require.context('./../assets/about/full', false, /\.(png|jpe?g|svg)$/));
    return (
        <PictureViewer
            thumbnails={thumbnails}
            fullImages={fullImages}
        />
    );
}

export default PictureSection;