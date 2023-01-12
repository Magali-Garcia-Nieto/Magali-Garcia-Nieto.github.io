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
                    <FontAwesomeIcon icon={faComment} className="fa-6x skill-icon"/>
                    <div className='margin-bottom'></div>
                    <h3 style={{color:"#006064"}}>{props.englishTitle}</h3>
                    <div className='margin-bottom'></div>
                        <p> <strong>{props.readingWritingp1}</strong> {props.readingWritingp2}</p> 
                        <p> <strong>{props.oralp1}</strong>{props.oralp2}</p>
                </Col>
            </Row>
        </Container>
        );
    
}

export default Skills;
