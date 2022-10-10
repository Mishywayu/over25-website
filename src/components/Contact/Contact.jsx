import React, { useState } from 'react';
import './contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { pink, red } from '@mui/material/colors';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { response } from 'express';

export default function Contact() {

    const AddFeedback = () => {
        const initialFeedbackState = {
            id: null,
            fullname: "",
            email: "",
            phone: "",
            message: "",
        };
        const [feedback, setFeedback] = useState(initialFeedbackState);
        // const [submitted, setSubitted] = useState(false);

        const handleChange = event => {
            const { name, value } = event.target;
            setFeedback({ ...feedback, [name]: value });
        };

        const saveFeedback = () => {
            var data = {
                fullname: feedback.fullname,
                email: feedback.email,
                phone: feedback.phone,
                message: feedback.message
            };

            FeedbackDataService.create(data)
                .then(response => {
                    setFeedback({
                        id: response.data.id,
                        fullname: response.data.fullname,
                        email: response.data.email,
                        phone: response.data.phone,
                        message: response.data.message
                    });
                    setSubitted(true);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        };

        const newFeedback = () => {
            setFeedback(initialFeedbackState);
            setSubitted(false);
        };
    };
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

                            <TextField id="standard-basic" label="Full Name" variant="standard" className='input' type="text" value={feedback.fullname} onchange={handleChange} name="fullname" />
                            <TextField id="standard-basic" label="E-mail" variant="standard" className='input' type="text" value={feedback.email} onChange={handeChange} name="email" />
                            <TextField id="standard-basic" label="Phone" variant="standard" className='input' type="text" value={feedback.phone} onChange={handeChange} name="phone" />
                            <TextField id="standard-basic" label="Message" variant="standard" className='input' type="text" value={feedback.message} onChange={handeChange} name="message" />

                            <button type='submit' className='submit-btn' onClick={saveFeedback}>Send message</button>
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
            {/* {submitted? (
                <div>
                    <h2>Feedback submitted successfully!</h2>
                </div>
            )} */}
        </div>
    );
}
