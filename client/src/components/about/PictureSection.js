import React from "react";
import PictureViewer from "./../about/PictureViewer";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const PictureSection = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-center picture-viewer-desc">
                    <h2 style={{textAlign: "center"}}>
                        Some of my favorite places
                    </h2>
                </Row>
            </Container>
            <PictureViewer/>
        </React.Fragment>
    );
}

export default PictureSection;