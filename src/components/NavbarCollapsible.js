import React, { Component} from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navBarContent from '../content/navBarContent';


import useLocalStorage from './useLocalStorage';


var idButton = "en";

function refreshPage() {
    window.location.reload(false);
}

function NavBarcollapsible(props) {

        var languageButton = "Language";

        var [chosenLenguage, setNewLenguage] = useLocalStorage("language", idButton);
        console.log ("Currently this is the chosen lenguage: " + chosenLenguage)

        function handleChange(event){
            setNewLenguage(event.target.id);
            
            refreshPage();
        }
        
        (chosenLenguage === "en" ? languageButton = "Language" : languageButton = "Idioma");
        
    
    return (
            <> 
                <Navbar collapseOnSelect expand="lg" className='navbar-style '>
                    <Container className='nav-style' style={{marginLeft:200, marginRight:200}}>
                    <Navbar.Brand className='navbar-link' style={{color:"#87DFD6", fontFamily: "Montserrat", fontWeight: "bold"}} href="#home">MAGUI</Navbar.Brand>
                        <NavbarToggle aria-controls='responsive-navbar-nav' style={{color:"#87DFD6"}}/>
                        <NavbarCollapse id="responsive-navbar-nav" style={{color:"#87DFD6"}}>
                            <Nav className="me-auto">
                            <Nav.Link   className='navbar-link' style={{color:"#87DFD6"}} href="#home">{props.homeButton}</Nav.Link>
                            <Nav.Link  className='navbar-link' style={{color:"#87DFD6"}} href="#skills">{props.skillsButton}</Nav.Link>
                            <Nav.Link  className='navbar-link' style={{color:"#87DFD6"}} href="#education">{props.educationButton}</Nav.Link>
                            <Nav.Link  className='navbar-link' style={{color:"#87DFD6"}} href="#experience">{props.experienceButton}</Nav.Link>
                            <Nav.Link  className='navbar-link' style={{color:"#87DFD6"}} href="#contact">{props.contactButton}</Nav.Link>
    
                            </Nav>
                            <NavDropdown  title={languageButton} id="navbarScrollingDropdown">
                            <NavDropdown.Item id="en" onClick={handleChange } href="">{props.englishButton}</NavDropdown.Item>
                            <NavDropdown.Item id="es" onClick={handleChange } href="">{props.spanishButton}</NavDropdown.Item>
                            </NavDropdown>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
            </>
    );
}
export {idButton};
export default NavBarcollapsible;
