import React, { useRef, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { setupFadeInObservor } from "../util/Observors";

const PictureBox = (props) => {
    const ref = useRef();

    useEffect(() => {
        setupFadeInObservor(ref.current);
    });
    return (
        <Col ref={ref} key={props.id} className="column-no-padding fade-in">
            <div className="picture-viewer-image-wrapper">
                <Image
                    id={props.imageId}
                    onClick={props.handleImageClick}
                    style={{width: "100%"}}
                    className="picture-viewer-image"
                    src={props.image}
                />
            </div>
        </Col>
    )
}

export default PictureBox;