import React from "react";
import './products.css';
import { Container, Row, Col } from "react-bootstrap";

import Carousel from 'react-bootstrap/Carousel';

export default function Items() {
    return (
        <div>
            <h2>Our Products
                <hr className="prod-hr" />
            </h2>

            <Container>
                <Row>
                    <Col>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-60"
                                    src="/images/item1.png"
                                    alt="First slide"
                                    id="image"
                                />
                                <div className="caption">
                                    <h5 className="caption-h5">First slide label</h5>
                                    <p className="caption-p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-60"
                                    src="/images/item2.png"
                                    alt="Second slide"
                                    id="image1"
                                />
                                <div className="caption">
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        23
                    </Col>
                </Row>
            </Container>
        </div>
    );
}