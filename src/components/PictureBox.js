import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const PictureBox = (props) => {
    return (
        <Col className="column-no-padding">
            <div className="picture-viewer-image-wrapper">
                <Image style={{height: "450px", width: "450px"}} className="picture-viewer-image" src={props.thumbnail}/>
            </div>
        </Col>
    )
}

export default PictureBox;