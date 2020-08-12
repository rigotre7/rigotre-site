import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import ImageViewerCarousel from "./ImageViewerCarousel";

const PictureViewer = (props) => {
    const [show, showModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    
    const handleImageClick = (event) => {
        const i = Number(event.target.id);
        setImageIndex(i);
        showModal(true);
    };
    const setImageIndexCallback = (index) => setImageIndex(index);
    const handleModalClose = () => showModal(false);

    const numRows = Math.ceil(props.thumbnails.length / 6);
    let rows = [];
    let index = 0;

    for (let j = 0; j < numRows; j++) {
        const rowThumbnails = props.thumbnails.slice(j * 6, (j * 6) + 6);
        let rowImages = [];

        // Insert the image components into the array
        for (let k = 0; k < rowThumbnails.length; k++) {
            const image = rowThumbnails[k];
            rowImages.push(
                <Col key={k} className="column-no-padding">
                    <div className="picture-viewer-image-wrapper">
                        <Image
                            id={index++}
                            onClick={handleImageClick}
                            style={{width: "100%"}}
                            className="picture-viewer-image"
                            src={image}
                        />
                    </div>
                </Col>
            );
        }

        // Populate the row with the images
        rows.push((
            <Row key={j} className="justify-content-md-center" xs={2} sm={2} md={4} lg={4} xl={6}>
                {rowImages}
            </Row>
        ));
    }

    return (
        <Jumbotron fluid>
            <Container fluid>
                {rows}
            </Container>
            <Modal
                show={show}
                size="lg"
                onHide={handleModalClose}
                centered
                className="about-me-modal"
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageViewerCarousel
                        images={props.fullImages}
                        index={imageIndex}
                        setIndex={setImageIndexCallback}
                    />
                </Modal.Body>
            </Modal>
        </Jumbotron>
    );
}

export default PictureViewer;