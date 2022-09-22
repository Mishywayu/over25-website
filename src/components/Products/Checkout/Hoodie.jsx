import React from 'react';
import { Link } from "react-router-dom";
import './checkout.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Form } from 'react-bootstrap';

import ColorPicker from './ColorPicker';

import Counter from './Quantity';

export default function Hoodie() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ marginTop: '50px' }}>
                        <Card.Header as="h5">Checkout</Card.Header>
                        <Card.Body>
                            <Card.Title style={{fontSize: '50px', marginBottom: '30px'}}>Hoodie</Card.Title>
                            <p style={{fontSize: '23px'}}>Availability: In stock</p>

                            <div style={{marginBottom: '20px'}}>
                                <Form.Label style={{fontSize: '23px'}}>Size</Form.Label>
                                <Form.Select id="size">
                                    <option>Open this select menu</option>
                                    <option value="1">XS</option>
                                    <option value="2">S</option>
                                    <option value="3">M</option>
                                    <option value="3">L</option>
                                    <option value="3">XL</option>
                                    <option value="3">XXL</option>
                                </Form.Select>
                            </div>

                            <Container>
                                <Row>
                                    <Col>
                                        <p style={{fontSize: '23px'}}>Hoodie color</p>
                                        <ColorPicker />
                                    </Col>
                                    <Col>
                                        <p style={{fontSize: '23px'}}>Tag print logo color</p>
                                        <ColorPicker />
                                    </Col>
                                </Row>
                            </Container>

                            <div style={{marginBottom: '20px'}}>
                                <p style={{fontSize: '23px'}}>Quantity</p>
                                <Counter />
                            </div>

                            <div className='checkout-btns'>
                            <button className='chechout-btn'>
                                <Link to="/delivery" style={{textDecoration: 'none', color: 'white', fontSize: '18px'}}>Proceed to delivery</Link>
                            </button>
                            <button className='chechout-btn1'>
                                <Link to="/" style={{textDecoration: 'none', color: 'white', fontSize: '18px'}}>Back</Link>
                            </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}