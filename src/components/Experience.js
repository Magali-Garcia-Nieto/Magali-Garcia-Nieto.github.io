import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkCarousel from './WorkCarousel';
import RenderCarousel1 from './RendersCarousel1';
import RenderCarousel2 from './RendersCarousel2';
import DraftsCarousel from './DraftsCarousel';


function Experience (props) {
    
        return (
            <Container>
                        <Row>
                            <Col sm={12} md={12} lg={4} className>
                                <WorkCarousel />
                                <div ></div>
                                
                            </Col>
                            <Col sm={12} md={12} lg={8} className='margin-bottom'>
                             
                                <h3 className='margin-bottom'> {props.workExperienceTitle}</h3>
                                <div >
                                    <h6><strong>{props.experienceTitle1}</strong></h6>
                                    <h6>{props.experienceDate1}</h6>
                                    <p className='experience-text'> {props.experiencep1} </p>
                                </div>
                                
                                <div >
                                    <h6><strong>{props.experienceTitle2}</strong></h6>
                                    <h6>{props.experienceDate2}</h6>
                                    <p className='experience-text'>{props.experiencep2}</p>
                                </div>
                                
                                <div >
                                    <h6><strong>{props.experienceTitle3}</strong></h6>
                                    <h6 >{props.experienceDate3}</h6>
                                    <p className='experience-text'>{props.experiencep3}</p>
                                </div>
                                
                                <div >
                                    <h6><strong>{props.experienceTitle4}</strong></h6>
                                    <h6>{props.experienceDate4}</h6>
                                    <p className='experience-text'>{props.experiencep4}</p>
                                </div>
      
                            </Col>

                        </Row>  
                        <Row>
                            <Col sm={12} md={12} lg={4}>
                                <DraftsCarousel />
                            </Col>
                                    <Col sm={12} md={12} lg={4}>
                                        <RenderCarousel1 />
                                    </Col>
                                    <Col sm={12} md={12} lg={4}>
                                        <RenderCarousel2 />

                                    </Col>
                        </Row>  
                    </Container>
        );
    
}

export default Experience;
