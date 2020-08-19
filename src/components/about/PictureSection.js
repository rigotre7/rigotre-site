import React from "react";
import PictureViewer from "./../about/PictureViewer";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const importAll = (r) => {
    return r.keys().sort((a, b) => {
        // Sort the images by name
        const regex = /(?<=\/)(.*?)(?=\.)/g;
        const numA = Number(a.match(regex)[0]);
        const numB = Number(b.match(regex)[0]);

        return numA - numB;
    }).map(r);
}

const thumbnails = importAll(require.context('./../../assets/about/thumbnails', false, /\.(png|jpe?g|svg)$/));
const fullImages = importAll(require.context('./../../assets/about/full', false, /\.(png|jpe?g|svg)$/));

const PictureSection = () => {
    return (
        <div style={{height: "calc(100vh - 56px)"}}>
            <Container>
                <Row className="justify-content-center picture-viewer-desc">
                    <h1>
                        Peek Into My Life
                    </h1>
                </Row>
            </Container>
            <PictureViewer
                thumbnails={thumbnails}
                fullImages={fullImages}
            />
        </div>
    );
}

export default PictureSection;