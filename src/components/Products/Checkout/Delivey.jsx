import {React, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import './checkout.css';
import Card from 'react-bootstrap/Card';

import Deliver from "./Deliver";
import PickUp from "./PickUp";

export default function Delivery(){
    const [selected, setSelected] = useState("deliver");
    const showCard = () => {
        if (selected === "deliver") {
            return <Deliver />
        }
        else if (selected === "pickup") {
            return <PickUp />
        }
    }
    return(
        <Container>
            <Row>
                <Col>
                <Card style={{ marginTop: '50px' }}>
                        <Card.Header as="h5">Delivery method</Card.Header>
                        <Card.Body>
                        <div className="delivery-method">
                            <button onClick={() => setSelected("deliver")}><LocalShippingIcon /> Delivered</button>
                            <button onClick={() => setSelected("pickup")}><StoreMallDirectoryIcon /> Pick up</button>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}