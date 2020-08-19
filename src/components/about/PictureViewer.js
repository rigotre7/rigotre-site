import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import ImageViewerCarousel from "./ImageViewerCarousel";
import PictureBox from "./PictureBox";
import { captions } from "../../constants/ImageCaptions";

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

    let rowImages = [];

    // Insert the image components into an array of bootstrap columns
    for (let id = 0; id < props.thumbnails.length; id++) {
        const image = props.thumbnails[id];
        rowImages.push(
            <PictureBox
                key={id}
                id={id}
                handleImageClick={handleImageClick}
                image={image}
                imageId={id}
            />
        );
    }

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
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageViewerCarousel
                        images={props.fullImages}
                        index={imageIndex}
                        setIndex={setImageIndexCallback}
                        captions={captions}
                    />
                </Modal.Body>
            </Modal>
        </Jumbotron>
    );
}

export default PictureViewer;