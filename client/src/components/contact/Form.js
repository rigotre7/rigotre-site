import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export const FormContainer = () => {
    const [submissionStatus, setSubmissionStatus] = useState({
        submitting: false,
        complete: false,
    });
    const [alert, setAlert] = useState({
        show: false,
        variant: "success",
        header: "",
        msg: "",
    })
    const successAlert = {
        show: true,
        variant: "success",
        header: "Success.",
        msg: "Message sent. Thank you!",
    };
    const failAlert = {
        show: true,
        variant: "danger",
        header: "Message failed to send",
        msg: "Please try again later",
    };
    const onSubmit = () => {
        setSubmissionStatus({
            submitting: true,
        })
    };
    const closeAlert = () => {
        setAlert({show: false});
    }
    const validateForm = (values) => {
        const errors = {};

        if (!values.fromName) {
            errors.fromName = "Please provide a name";
        }
        if (!values.message) {
            errors.message = "Please provide a message";
        }
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Please enter a valid email address";
        }
        return errors;
    };
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            fromName: "",
            email: "",
            message: "",
        },
        validate: validateForm,
        onSubmit,
        validateOnChange: false,
        validateOnBlur: false,
    });

    useEffect(() => {
        if (submissionStatus.submitting) {
            // Send email message
            emailjs
            .sendForm("", "", "", "")
            .then((msg) => {
                setSubmissionStatus({
                    submitting: false,
                    complete: true,
                });
                if (msg.status === 200) {
                    setAlert(successAlert);
                }
            }, (err) => {
                setSubmissionStatus({
                    submitting: false,
                    complete: true,
                });
                setAlert(failAlert);
            });
        }
    }, [submissionStatus, successAlert, failAlert]);

    return (
        <React.Fragment>
            <Alert show={alert.show} variant={alert.variant} onClose={closeAlert} dismissible>
                <Alert.Heading>{alert.header}</Alert.Heading>
                <p>{alert.msg}</p>
            </Alert>
            <Row>
                <Col>
                    <Form id={"contact-form"} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="fromName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.fromName}
                                    maxLength={30}
                                    type="text"
                                    name="fromName"
                                    isValid={touched.fromName && !errors.fromName}
                                />
                                <Form.Control.Feedback className="text-danger" type="invalid">
                                    {errors.fromName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    maxLength={254}
                                    onChange={handleChange}
                                    value={values.email}
                                    type="email"
                                    name="email"
                                    isValid={touched.email && !errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={values.message}
                                maxLength={400}
                                as="textarea"
                                className="contact-message"
                                name="message"
                                isValid={touched.message && !errors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button disabled={submissionStatus.submitting || submissionStatus.complete} variant="primary" type="submit">
                            {submissionStatus.submitting &&
                                <Spinner
                                    style={{marginRight: "5px"}}
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            }
                            {submissionStatus.submitting ? "Sending..." : "Send"}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}