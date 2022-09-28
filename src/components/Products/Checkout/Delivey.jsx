import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import './checkout.css';
import Card from 'react-bootstrap/Card';

import Ship from "./Ship";
import PickUp from "./PickUp";
import Payment from "./Payment";
import Hoodie from "./Hoodie";

export default function Delivery() {
    const [selected, setSelected] = useState("ship");
    const showCard = () => {
        if (selected === "ship") {
            return <Ship />
        }
       else if (selected === "pickup") {
            return <PickUp />
        }
    }
    // const changeHeight = () => {
    //     if (selected === "ship") {
    //         document.getElementById('show').style.height = '423px';
    //     }
    //     else if (selected === "pickup") {
    //         document.getElementById('show').style.height = '100px';
    //     }
    // }
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

                            <div id="show">
                                {showCard() }
                                {/* {changeHeight()} */}
                            </div>

                            <div className="delivery-btns">
                                <button className="btn btn1"><Link to="/payment" style={{color: 'white', textDecoration: 'none'}}>Proceed to payment</Link></button>
                                <button className="btn" style={{marginRight: '30px'}}><Link to="/hoodie" style={{color: 'white', textDecoration: 'none'}}>Back</Link></button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}