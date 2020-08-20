import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FormContainer = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Row>
            <Col>
                <Form id={"contact-form"}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Phone" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" className="contact-message"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}