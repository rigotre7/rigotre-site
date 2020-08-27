import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import ImageViewerCarousel from "./ImageViewerCarousel";
import PictureBox from "./PictureBox";
import { THUMB_URLS } from "../../constants/constants";

const PictureViewer = () => {
    const [show, showModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(1);
    
    const handleImageClick = (event) => {
        const i = Number(event.target.id);
        setImageIndex(i);
        showModal(true);
    };
    const setImageIndexCallback = (index) => setImageIndex(index);
    const handleModalClose = () => showModal(false);

    let rowImages = [];

    // Insert the image components into an array of bootstrap columns
    THUMB_URLS.forEach((url, id) => {
        rowImages.push(
            <PictureBox
                key={`picutre-box-${id}`}
                id={id}
                handleImageClick={handleImageClick}
                image={url}
                imageId={id}
            />
        );
    })

    const row = 
        <Row className="justify-content-center" xs={2} sm={2} md={4} lg={4} xl={6}>
            {rowImages}
        </Row>;

    return (
        <Jumbotron className="picture-viewer-jumbotron" fluid>
            <Container fluid>
                {row}
            </Container>
            <Modal
                show={show}
                size="lg"
                onHide={handleModalClose}
                centered
                className="about-me-modal"
            >
                <Modal.Header closeButton/>
                <Modal.Body className="carousel-wrapper">
                    <ImageViewerCarousel
                        index={imageIndex}
                        setIndex={setImageIndexCallback}
                    />
                </Modal.Body>
            </Modal>
        </Jumbotron>
    );
}

export default PictureViewer;