import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

const ExperienceRow = (props) => {

    const [show, showModal] = useState(false);

    const handleImageClick = () => showModal(true);
    const handleModalClose = () => showModal(false);

    return (
        <React.Fragment>
            <Row className="experience-row">
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
                            {props.bullets.map((bulletPoint) => {
                                return <li>{bulletPoint}</li>
                            })}
                        </ul>
                    }
                </Col>
                <Col className="col-md-6 col-sm-12 col-12">
                    <Image onClick={handleImageClick} className="image experience-screenshots" src={props.image} rounded/>
                </Col>
            </Row>
            <Modal
                show={show}
                size="lg"
                onHide={handleModalClose}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image className="image" src={props.image} rounded/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default ExperienceRow;