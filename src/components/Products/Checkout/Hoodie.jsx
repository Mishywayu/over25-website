import React from 'react';
import { Link } from "react-router-dom";
import './checkout.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Form } from 'react-bootstrap';

import ColorPicker from './ColorPicker';

import Counter from './Quantity';
import { hover } from '@testing-library/user-event/dist/hover';

export default function Hoodie() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ marginTop: '50px', backgroundColor: 'burlywood' }}>
                        <Card.Header as="h5">Checkout</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '50px', marginBottom: '30px', display: 'flex' }}>Hoodie: <p style={{ fontSize: '23px', fontWeight: '100', marginTop: '27px', marginLeft: '10px' }}>Available in Stock.</p></Card.Title>

                            <div style={{ display: 'flex' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <Form.Label style={{ fontSize: '23px', fontWeight: '350' }}>Size</Form.Label>
                                    <Form.Select id="size" style={{ width: '220px' }}>
                                        <option>Open this select menu</option>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="3">L</option>
                                        <option value="3">XL</option>
                                        <option value="3">XXL</option>
                                    </Form.Select>
                                </div>

                                <div style={{ marginLeft: '90px' }}>
                                    <p style={{ fontSize: '23px', fontWeight: '350' }}>Hoodie color</p>
                                    <ColorPicker />
                                </div>
                                <div style={{ marginLeft: '50px' }}>
                                    <p style={{ fontSize: '23px', fontWeight: '350' }}>Tag print logo color</p>
                                    <ColorPicker />
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px', marginTop: '20px', fontWeight: '350' }}>
                                <p style={{ fontSize: '23px' }}>Quantity</p>
                                <Counter />
                            </div>

                            <div className='checkout-btns'>
                                <button className='chechout-btn'>
                                    <Link to="/delivery" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Proceed to delivery</Link>
                                </button>
                                <button className='checkout-btn1' style={{ padding: '10px 20px', backgroundColor: 'transparent', border: '1px solid brown', borderRadius: '20px' }}>
                                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Back</Link>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}