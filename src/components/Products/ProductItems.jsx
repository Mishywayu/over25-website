import React from "react";
import { Link } from "react-router-dom";
import './products.css';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Items() {
    return (
        <div className="items-page">
            <h2>Our Products
                <hr className="prod-hr" />
            </h2>

            <Container>
                <Row>
                    <Col>
                        <Card style={{width: '60%'}}>
                            <Card.Img variant="top" src="/images/item1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info">
                                    <Link to="/hoodie">Shop now</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '60%' }}>
                            <Card.Img variant="top" src="/images/item6.png" className="item-2" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info">
                                    <Link to="/sweatshirt">Get it</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}