import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function Ship() {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h4>Shipping Address</h4>
                        <Form>
                            <div>
                                <Form.Label>County/Region</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>

                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>

                            <div>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" />
                            </div>

                            <Row>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                                <Col>
                                    <Form.Label>Postal code</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>

                            <div>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" />
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}