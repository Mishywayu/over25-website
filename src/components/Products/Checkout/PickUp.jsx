import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CircleIcon from '@mui/icons-material/Circle';
import { textAlign } from "@mui/system";

export default function PickUp() {
    return(
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '30rem' }}>
                    <p ><CircleIcon  style={{marginLeft: '10px'}}/> Senteu Plaza, PQ6M+79V, Nairobi</p>
                    <p style={{marginLeft: '20px', fontWeight: 'bold', color: 'burlywood', marginBottom: '0px'}}>Opens 9AM to 5PM</p>
                    <caption style={{marginLeft: '290px'}}>
                        Usually ready in 2-4 days.
                    </caption>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}