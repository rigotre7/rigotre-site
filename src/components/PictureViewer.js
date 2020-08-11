import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PictureBox from "./PictureBox";

const PictureViewer = (props) => {
    const numRows = Math.ceil(props.thumbnails.length / 6);
    let rows = [];
    debugger;

    for (let j = 0; j < numRows; j++) {
        const rowThumbnails = props.thumbnails.slice(j * 6, (j * 6) + 6);
        const rowImages = props.fullImages.slice(j * 6, (j * 6) + 6);

        rows.push((
            <Row fluid className="justify-content-md-center" xs={2} sm={2} md={4} lg={6} xl={6}>
                    {
                        rowThumbnails.map((image, index) => {
                            return (
                                <PictureBox
                                    thumbnail={image}
                                    fullImage={rowImages[index]}
                                />
                            )
                        })
                    }
            </Row>
        ));
    }

    return (
        <Jumbotron fluid>
            <Container fluid>
                {rows}
            </Container>
        </Jumbotron>
    );
}

export default PictureViewer;