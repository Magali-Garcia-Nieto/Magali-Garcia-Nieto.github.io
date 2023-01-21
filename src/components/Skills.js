import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPenRuler } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import skillsContent from '../content/skillsContent';

function Skills (props) {
    
        return (
            <Container>
            <Row>
                <Col sm={12} md={12} lg={3}>
                    <FontAwesomeIcon icon={faCode} className="fa-6x skill-icon"/>
                    <div className='margin-bottom'></div>
                    <h3 style={{color:"#006064"}}>{props.coderTitle}</h3>
                    <div className='margin-bottom'></div>
                        <p> HTML ‧ Javascript ‧ CSS ‧ Bootstrap ‧ jQuery ‧ Node ‧ Express ‧ APIs ‧ MongoDB ‧ React ‧ Git ‧ GitHub</p>
                </Col>
                <Col sm={12} md={12} lg={3}>
                    <FontAwesomeIcon icon={faPenRuler} className="fa-6x skill-icon"/>
                    <div className='margin-bottom'></div>
                    <h3 style={{color:"#006064"}}>{props.architectTitle}</h3>
                    <div className='margin-bottom'></div>
                        <p> AutoCad ‧ SketchUp ‧ Lumion ‧ Revit</p>
                </Col>
                <Col sm={12} md={12} lg={3}>
                    <FontAwesomeIcon icon={faLightbulb} className="fa-6x skill-icon"/>
                    <div className='margin-bottom'></div>
                    <h3 style={{color:"#006064"}}>{props.softTitle}</h3>
                    <div className='margin-bottom'></div>
                    <p> {props.softSkillsp}</p>
                </Col>
                <Col sm={12} md={12} lg={3} >
                    <a style={{color:"#006064"}} href="https://www.efset.org/cert/By5zpN"><FontAwesomeIcon icon={faComment} className="fa-6x git-icon"/></a>
                    <div className='margin-bottom'></div>
                    <h3 style={{color:"#006064"}}>{props.englishTitle}</h3>
                    <div className='margin-bottom'></div>
                    <p><strong>{props.englishLevel}</strong></p>
                    <a class="a-style" href="https://www.efset.org/cert/By5zpN"> 80/100<br></br>EF Standard English Test <br></br>(EF SET) - 2023</a>
                </Col>
            </Row>
        </Container>
        );
    
}

export default Skills;
