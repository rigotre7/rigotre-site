import React, { useRef, useEffect } from "react";

import Col from "react-bootstrap/Col";
import { IKImage } from "imagekitio-react";
import { setupFadeInObservor } from "../../util/Observors";

const PictureBox = (props) => {
    const ref = useRef();

    useEffect(() => {
        setupFadeInObservor(ref.current);
    });
    return (
        <Col ref={ref} key={props.id} className="column-no-padding fade-in">
            <div className="picture-viewer-image-wrapper">
                <div className="picture-viewer-image">
                    <IKImage
                        style={{width: "inherit"}}
                        id={props.imageId}
                        onClick={props.handleImageClick}
                        publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
                        urlEndpoint="https://ik.imagekit.io/rigotre"
                        path={props.image}
                        transformation={[{
                            height: 350,
                            width: 350
                          }]}
                    />
                </div>
            </div>
        </Col>
    )
}

export default PictureBox;