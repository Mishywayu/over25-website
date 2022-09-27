import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import './checkout.css';
import Card from 'react-bootstrap/Card';

import Ship from "./Ship";
import PickUp from "./PickUp";

export default function Delivery() {
    const [selected, setSelected] = useState("deliver");
    const showCard = () => {
        if (selected === "ship") {
            return <Ship />
        }
        else if (selected === "pickup") {
            return <PickUp />
        }
    }
    const showDiv = () => {
        document.getElementById("show").style.display = showCard();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ marginTop: '50px' }}>
                        <Card.Header as="h5">Delivery method</Card.Header>
                        <Card.Body>
                            <div className="delivery-method">
                                <button className="delivery-btn" onClick={() => setSelected("ship")}><LocalShippingIcon />Ship</button>
                                <button className="delivery-btn" onClick={() => setSelected("pickup")}><StoreMallDirectoryIcon />Pick Up</button>
                            </div>
                            <div id="show" style={{ width: '50%' }}>
                                {showCard}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}