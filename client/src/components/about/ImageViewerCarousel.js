import React, { useRef, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import { setupHeaderObserver } from "../../util/Observors";
import {
    CAPTIONS,
    FULL_URLS,
} from "./../../constants/constants";

const ImageViewerCarousel = (props) => {

    const ref = useRef();
    const onSelect = (index) => props.setIndex(index);
    
    useEffect(() => {
        setupHeaderObserver(ref.current);
    });

    let images = [];

    FULL_URLS.forEach((url, id) => {
        const caption = CAPTIONS && CAPTIONS[id] ?
        CAPTIONS[id].caption : "";
        const description = CAPTIONS && CAPTIONS[id] ?
            CAPTIONS[id].desc : "";
        images.push(
            <Carousel.Item
                key={`carousel-item-${id}`}
            >
                <img
                    className={"mx-auto d-block image-viewer-image"}
                    src={url}
                    alt={"First slide"}
                />
                <Carousel.Caption>
                    <p style={{margin: 0}}>{caption}</p>
                    <p style={{margin: 0}}>{description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <Carousel ref={ref} className={"image-viewer-carousel"} activeIndex={props.index} onSelect={onSelect}>
            {images}
        </Carousel>
    )
}

export default ImageViewerCarousel;