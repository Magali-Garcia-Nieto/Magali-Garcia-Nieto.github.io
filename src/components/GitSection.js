import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";



function GitSection(props){
    return (
        <Container > 
                        <Row>
                            <Col sm={12} md={12} lg={2}>
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                    <a  style={{color:"#006064"}} href="https://github.com/Magali-Garcia-Nieto"><FontAwesomeIcon icon={faGithub} className="fa-7x git-icon"/></a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={12} lg={8}>
                                
                                <h3>{props.gitTitle1}</h3>
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                    <p>{props.gitp1}<a class="a-style" href='https://github.com/Magali-Garcia-Nieto'>{props.gita1}</a>{props.gitp2}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
    );
}

export default GitSection;