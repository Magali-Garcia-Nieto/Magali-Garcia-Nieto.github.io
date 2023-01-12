import React, { Component } from 'react';
import ImgProfile from "../images/Magalí.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutContent from '../content/aboutContent';

function About (props) {
    
        return (
              <Container >
              <Row>
                  <Col  sm={12} md={12} lg={3}>
                      <img className="profile-img margin-bottom" src={ImgProfile} alt="Magalí García Nieto" ></img> 
                      
                  </Col>
                  <Col sm={12} md={12} lg={9}>
                  <h1 className='title-style '> MAGALÍ GARCÍA NIETO</h1>
                        <h3 className='subtitle-style margin-bottom'> {props.aboutSubTitle}</h3>
                        <p>{props.aboutp1}</p>
                        <p>{props.aboutp2}</p>
                        <p>{props.aboutp3}</p>
                  </Col>
              </Row>
          </Container>
        );
    
}

export default About;
