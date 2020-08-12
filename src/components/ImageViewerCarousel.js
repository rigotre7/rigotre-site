import React from "react";

import Carousel from "react-bootstrap/Carousel";

const ImageViewerCarousel = (props) => {

    const onSelect = (index) => props.setIndex(index);

    return (
        <Carousel className={"image-viewer-carousel"} activeIndex={props.index} onSelect={onSelect}>
            {props.images.map((image, i) => {
                return (
                    <Carousel.Item
                        key={i}
                    >
                        <img
                            className={"mx-auto d-block image-viewer-image"}
                            src={image}
                            alt={"First slide"}
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ImageViewerCarousel;