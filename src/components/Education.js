import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education (props) {

        return (
            <Container > 
                        <Row>
                            <Col sm={12} md={12} lg={4}>
                                <h3 className='margin-bottom'>{props.universityTitle}</h3>
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                        <h6><strong>{props.universitySubTitle}</strong></h6>
                                        <h6>{props.universityp1}</h6>
                                        <p>2015 - 2020</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3 className='margin-bottom'>{props.coursesTitle}</h3>
                                <Row>
                                <Col sm={12} md={12} lg={6}>
                                        <h6><strong>freeCodeCamp.org</strong></h6>
                                        <a class="a-style" href="https://www.freecodecamp.org/certification/magaligarcia/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>
                                        <p>{props.coursesDatep2}</p>
                                    </Col>
                                    <Col sm={12} md={12} lg={6}>
                                        <h6><strong>Udemy</strong></h6>
                                        <a class="a-style" href='https://udemy-certificate.s3.amazonaws.com/image/UC-953a204a-81b6-4269-9277-ea4df2d9f739.jpg'>The Complete 2023 Web Development Bootcamp</a>
                                        <p>{props.coursesDatep1}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
        );
    
}

export default Education;
