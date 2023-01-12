import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'



function Contact( props){
    return(
        <Container>
                        <Row>
                            <Col sm={12} md={12} lg={2} className='margin-bottom'></Col>
                            <Col sm={12} md={12} lg={4} className='margin-bottom'>

                                    <div className='margin-bottom'>
                                        <h3 style={{color:"#006064"}} className='margin-bottom'> {props.contactTitle1}</h3>
                                        <strong className="contact-strong">Email:</strong><a class="a-style" href="mailto:magali.garcia.nieto96@gmail.com"> magali.garcia.nieto96@gmail.com</a> <br></br>
                                        <strong className="contact-strong">{props.contactCellphone}</strong><a class="a-style" href="tel: +5492625532405"> + 54 9 (2625) 15532405 </a><br></br>
                                        <strong className="contact-strong margin-bottom">LinkedIn:</strong><a class="a-style" href="https://www.linkedin.com/in/magal%C3%AD-garc%C3%ADa-nieto-403b83231/"> https://www.linkedin.com/in/magali-garcia-nieto/ </a>
                                    </div>
                
                                        <a class="a-style" href='https://github.com/Magali-Garcia-Nieto'><FontAwesomeIcon icon={faGithub} className="fa-xl git-icon"/></a>
                                        <a  style={{color:"#87DFD6"}} href="https://www.linkedin.com/in/magal%C3%AD-garc%C3%ADa-nieto-403b83231/"><FontAwesomeIcon icon={faLinkedin} className="fa-xl in-icon"/></a>

                            </Col>
                            <Col sm={12} md={12} lg={4}>
                            <h3 style={{color:"#006064", textAlign:"center"}} className='margin-bottom'> {props.contactTitle2} {props.contactp}</h3>

                            </Col>
                            <Col sm={12} md={12} lg={2}></Col>
                        </Row>
                    </Container>
    );
}

export default Contact;