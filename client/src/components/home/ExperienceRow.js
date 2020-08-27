import React, { useState, useRef, useEffect } from "react";
import { IKImage } from "imagekitio-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { setupFadeInObservor } from "../../util/Observors";

const ExperienceRow = (props) => {

    const [show, showModal] = useState(false);
    const ref = useRef();
    const handleImageClick = () => showModal(true);
    const handleModalClose = () => showModal(false);

    useEffect(() => {
        // unobserve cleanup happens after row comes into view
        setupFadeInObservor(ref.current);
    });

    return (
        <React.Fragment>
            <Row ref={ref} className={`experience-row fade-in`}>
                <Col className="col-md-6 col-sm-12 col-12">
                    {props.link &&
                        <h5>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={props.link}
                            >
                                {props.header}
                            </a>
                        </h5>
                    }
                    {!props.link &&
                        <h5>{props.header}</h5>
                    }
                    <p>{props.text}</p>
                    {props.bullets && 
                        <ul>
                            {props.bullets.map((bulletPoint, i) => {
                                return <li key={i}>{bulletPoint}</li>
                            })}
                        </ul>
                    }
                </Col>
                <Col className="col-md-6 col-sm-12 col-12">
                    <IKImage
                        publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
                        urlEndpoint="https://ik.imagekit.io/rigotre"
                        className="image experience-screenshots"
                        path={props.image}
                        onClick={handleImageClick}
                    />
                </Col>
            </Row>
            <Modal
                show={show}
                size="lg"
                onHide={handleModalClose}
                centered
            >
                <Modal.Header className="image-viewer" closeButton>
                <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="carousel-wrapper">
                    <div className="experience-modal-body">
                        <IKImage
                            publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
                            urlEndpoint="https://ik.imagekit.io/rigotre"
                            className="image experience-screenshots"
                            path={props.image}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default ExperienceRow;