import React, { useRef, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import { setupHeaderObserver } from "../../util/Observors";

const ImageViewerCarousel = (props) => {

    const ref = useRef();
    const onSelect = (index) => props.setIndex(index);
    
    useEffect(() => {
        setupHeaderObserver(ref.current);
    });

    return (
        <Carousel ref={ref} className={"image-viewer-carousel"} activeIndex={props.index} onSelect={onSelect}>
            {props.images.map((image, i) => {
                const caption = props.captions && props.captions[i] ?
                    props.captions[i].caption : "";
                const description = props.captions && props.captions[i] ?
                    props.captions[i].desc : "";
                return (
                    <Carousel.Item
                        key={i}
                    >
                        <img
                            className={"mx-auto d-block image-viewer-image"}
                            src={image}
                            alt={"First slide"}
                        />
                        <Carousel.Caption>
                            <p style={{margin: 0}}>{caption}</p>
                            <p style={{margin: 0}}>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ImageViewerCarousel;