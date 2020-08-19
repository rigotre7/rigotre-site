import React, { useRef, useEffect } from "react";
import {
    Row,
    Col,
} from "react-bootstrap";

import { setupFadeInObservor } from "../../util/Observors";

const ExperienceHeader = (props) => {
    const ref = useRef();

    useEffect(() => {
        setupFadeInObservor(ref.current);
    });
    return (
        <Row ref={ref} align="center" className="fade-in">
            <Col xs={12}>
                <h3>{props.header}</h3>
            </Col>
            {props.subheader &&
                <Col xs={12}>
                    <p>{props.subheader}</p>
                </Col> 
            }
        </Row>
    );
}

export default ExperienceHeader;