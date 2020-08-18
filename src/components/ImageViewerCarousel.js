import React from "react";

import Carousel from "react-bootstrap/Carousel";

const ImageViewerCarousel = (props) => {

    const onSelect = (index) => props.setIndex(index);

    return (
        <Carousel className={"image-viewer-carousel"} activeIndex={props.index} onSelect={onSelect}>
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
                            <h2>{caption}</h2>
                            <p>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ImageViewerCarousel;