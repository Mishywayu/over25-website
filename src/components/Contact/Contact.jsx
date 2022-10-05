import React, { useState } from 'react';
import './contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { pink, red } from '@mui/material/colors';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Contact() {
    return (
        <div className='contact-content'>
            <Container>
                <Row>
                    <Col className='col1'>
                        <h1>Contact Us</h1>
                    </Col>
                    <Col>
                        <form action='' method=''>
                            <h5>Feedback Form</h5>

                            <TextField id="standard-basic" label="Full Name" variant="standard" className='input' />
                            <TextField id="standard-basic" label="E-mail" variant="standard" className='input' />
                            <TextField id="standard-basic" label="Phone" variant="standard" className='input' />
                            <TextField id="standard-basic" label="Message" variant="standard" className='input' />

                            <button type='submit' className='submit-btn'>Send message</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <div className='socials'>
                <Container>
                    <Row>
                        <Col>
                            <div className='address'>
                                <h6>Our Contacts</h6>
                                <ul>
                                    <li>reachover25@gmail</li>
                                    <li>+254700104478</li>
                                </ul>
                            </div>
                            <div className='social-handles'>
                                <ul>
                                    <li><a href='https://www.facebook.com/OverTwentyFiveKE/'><FacebookIcon color='primary' /></a></li>
                                    <li><a href='https://www.instagram.com/over25channel/'><InstagramIcon sx={{ color: pink[500] }} /></a></li>
                                    <li><a href='https://twitter.com/over25channel'></a><TwitterIcon color='primary' /></li>
                                    <li><a href=''><YouTubeIcon sx={{ color: red[500] }} /></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
